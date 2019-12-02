import 'colors';
import * as globby from 'globby';
import store from './store.type';
import spec from './spec.type';
import test from './test.type';
import * as _ from 'lodash';

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
export async function runSpecs(specs: spec[]) {
  for (var spec of specs) {
    if (!ACTIONS.includes(spec.action)) {
      continue;
    }
    let context = getContext();
    let action = new spec.action();
    let args = getVariables(spec.args);
    let title = spec.title;
    let outs = spec.outs;
    let results = await action.execute(title, args, outs, context);
    if (results) {
      storeVariables(outs, results)
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
    if (typeof key === "string" && key.startsWith('$') && STORE.variables[key] !== undefined) {
      return STORE.variables[key];
    } else {
      return key;
    }
  });
}

/**
 * Stores a set of results under the given keys.
 * @param keys the keys to be used to retrieve stored values.
 * @param results the values to be stored
 */
function storeVariables(keys: string[], results: any[]): void {
  keys.forEach((key: string, index: number) => {
    if (key.startsWith('$')) {
      STORE.variables[key] = results[index];
    }
  });
}

/**
 * Runs the currently loaded set of tests.
 */
export async function runTests(): Promise<void> {
  for (const test of TESTS) {
    console.log(`Running test ${test.title}`);
    await runSpecs(test.specs).catch(err => console.log('Error: ', err));
  }
}

/**
 * Opens a new window for a given browser and navigates to a specified url.
 */
// TODO: This action has been added here temporarily so that it
// can be accessed by this module. It should be moved to another repository.
import Action from './action.i';
import { Browser } from 'puppeteer';

export class GoTo implements Action {
  constructor() {}

  // @ts-ignore
  async execute(title: string, args: string[], outs: any[], context: any): Promise<any> {
    var browser: Browser = context.browser;
    let page = await browser.newPage();
    await page.goto(args[0]).catch(err => console.log(title.red, err));
    if (page) {
      process.stdout.write('.'.green);
    }
    return [ page ];
  }
}

/**
 * Checks two given sets of values for equality.
 */
// TODO: This action has been added here temporarily so that it
// can be accessed by this module. It should be moved to another repository.
export class IsEqual implements Action {
  constructor() {}

  // @ts-ignore
  async execute(title: string, args: string[], outs: any[], context: any): Promise<any> {
    let result = _.isEqual(args, outs);
    if (result) {
      process.stdout.write('.'.green);
    } else {
      console.log(title.red);
    }
    return null;
  }
}

import { Page } from 'puppeteer';

/** 
 * Resizes a given page's viewport to the given height and width.
 */
// TODO: This action has been added here temporarily so that it
// can be accessed by this module. It should be moved to another repository.
export class ResizeViewport implements Action {
  constructor() {}

  // @ts-ignore
  async execute(title: string, args: any[], outs: any[], context: any): Promise<any> {
    let page: Page = args[0];
    let width = args[1];
    let height = args[2];

    await page.setViewport({width, height});

    const data = await page.evaluate(() => {
      return [document.documentElement.clientWidth, document.documentElement.offsetHeight];
    })
    .catch(err => console.log(title.red, err));

    if (data) {
      process.stdout.write('.'.green);
    }
   
    return data;
  }
}