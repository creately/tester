import 'colors';
import * as globby from 'globby';
import store from './store.type';
import spec from './spec.type';
import test from './test.type';
import * as util from 'util';

const STORE: store = {
  context: {},
  reporters: [],
  variables: {},
};

const ACTIONS: any = [];
const TESTS: test[] = [];

/**
 * Finds all files in the given path that match the given extension.
 * Looks through directories and sub directories. Default extension is '.test.js'.
 * @param path the path to search in
 * @param extensions a string array of extensions to look for
 * @returns a promise with an array of paths to found files
 */

export async function findFiles(path: string, extensions: string[] = ['.test.js']): Promise<string[]> {
  const fileTypes = extensions.map(ext => '**/*' + ext);
  const paths = await globby(fileTypes, {
    cwd: path,
  });

  return paths;
}

/**
 * Stores the given value under the given key.
 * @param key the key to identify the store item with
 * @param value the object to store
 */
export function load(key: string, func: Function): void {
  let val = func.call(null);
  switch (key) {
    case 'context':
      STORE.context = { ...STORE.context, ...val };
      return;
    case 'reporter':
      STORE.reporters.push(val);
      return;
    default:
      return;
  }
}

/**
 * Stores the given test.
 * @param title the name of the test
 * @param specs an array of test specs
 */
export function addTest(title: string, specs: spec[]): void {
  TESTS.push({ title: title, specs: specs });
}

/**
 * Gets the value stored under the context key.
 */
function getContext(): any {
  return STORE.context;
}

/**
 * Gets the value stored under the reporter key.
 */
function getReporter(): any {
  return STORE.reporters;
}

/**
 * Registers and stores actions.
 * @param action an action to register
 */
export function registerAction(action: any): void {
  if (!ACTIONS.includes(action)) {
    ACTIONS.push(action);
  }
}

/**
 * Executes an array of specs using the current context.
 * @param specs an array of specs.
 */
export async function execute(specs: spec[]) {
  for (var spec of specs) {
    if (ACTIONS.includes(spec.action)) {
      let context = getContext();
      let action = new spec.action();
      let args = spec.args.map((arg: string) => {
        if (arg.startsWith('$') && STORE.variables[arg]) {
          return STORE.variables[arg];
        } else {
          return arg;
        }
      });

      let outs = spec.outs;
      let result = await action.execute(args, context);
      
      outs.forEach((out: string, index: number) => {
        STORE.variables[out] = result[index];
      })
    }
  }
  console.log(util.inspect(STORE.variables, false, null, true));
}

/**
 * Gets stored tests.
 */
function getTests(): test[] {
  return TESTS;
}

export function runTests(): void {
  TESTS.forEach(test => {
    (async () => {
      console.log(test.title);
      await execute(test.specs);
    })().catch(err => console.log('Error: ', err));
  });
}

import { Action } from './action.i';
import { Browser } from 'puppeteer';

export class GoTo implements Action {
  constructor() {}

  async execute(args: string[], context: any): Promise<any> {
    var browser: Browser = context.browser;

    let page = await browser.newPage();
    await page.goto(args[0]);

    const data = await page.evaluate(() => {
      return [document.URL];
    });

    return data;
  }
}