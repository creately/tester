import 'colors';
import * as globby from 'globby';
import store from './store.type';
import spec from './spec.type';
import test from './test.type';

const STORE: store = {
  context: {},
  reporters: [],
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
export function test(title: string, specs: spec[]): void {
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
  specs.forEach((val: spec) => {
    if (ACTIONS.includes(val.action)) {
      let context = getContext();
      let action = new val.action();
      let expected = val.outs;
      (async () => {
        let result = await action.execute(val.args, context);
        if (arraysEqual(expected, result)) {
          console.log('.'.green);
          return true;
        } else {
          console.log(('FAILURE: ' + val.title).red, ' - expected: ' + expected + ', got: ' + result);
          return false;
        }
      })().catch(err => console.log('Error: ', err));
    }
  });
}

/**
 * Compares arrays for equality.
 * @param a the first array to compare
 * @param b the second array to compare
 */
function arraysEqual(a: any[], b: any[]): boolean {
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * Gets stored tests.
 */
function getTests(): test[] {
  return TESTS;
}
