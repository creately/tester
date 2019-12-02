import 'colors';
import * as globby from 'globby';
import store from './store.type';
import spec from './spec.type';
import test from './test.type';

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
// TODO: The following ts-ignore comment has been added to temporarily suppress compilation errors
// as the function is not currently used. Remove this when this function has been used somewhere.
// @ts-ignore
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
      let args = getVariables(spec.args);
      let outs = spec.outs;
      let results = await action.execute(args, context);
      if (!storeVariables(outs, results)) {
        console.log(`Spec ${spec.title} failed, arg/resut count mismatch`);
      }
    }
  }
}

/**
 * Gets stored tests.
 */
// TODO: The following ts-ignore comment has been added to temporarily suppress compilation errors
// as the function is not currently used. Remove this when this function has been used somewhere.
// @ts-ignore
function getTests(): test[] {
  return TESTS;
}

/**
 * Gets stored variables if they exist, else returns the key value,
 * for a set of given keys.
 * @param keys the keys to retrieve variable values for.
 */
function getVariables(keys: string[]): any[] {
  return keys.map((key: string) => {
    if (key.startsWith('$') && STORE.variables[key] !== undefined) {
      return STORE.variables[key];
    } else {
      return key;
    }
  });
}

function storeVariables(keys: string[], results: any[]): boolean {
  if (keys.length !== results.length) {
    return false;
  }
  keys.forEach((out: string, index: number) => {
    STORE.variables[out] = results[index];
  });
  return true;
}

export function runTests(): void {
  TESTS.forEach(async test => {
    console.log(`Running test ${test.title}`);
    await execute(test.specs).catch(err => console.log('Error: ', err));
  });
}

// TODO: The GoTo action has been added here temporarily so that it
// can be accessed by this module.
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
