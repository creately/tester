import 'colors';
import * as globby from 'globby';
import store from './store.type';
import spec from './spec.type';
import test from './test.type';

// TODO: These actions have been added here temporarily so that it
// can be accessed by this module when installed globally.
// It should be moved to another repository.
import GoTo from './actions/go-to';
import ResizeViewport from './actions/resize-viewport';
import IsEqual from './actions/is-equal';
import GetPageHeight from './actions/get-page-height';

export { GoTo, ResizeViewport, IsEqual, GetPageHeight };

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
    let outs = spec.outs;
    try {
      let results = await action.execute(args, context);
      if (outs && results) {
        storeVariables(outs, results);
      }
    } catch (error) {
      console.error(`Error in ${spec.title}:`.red, error.red);
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
function getVariables(keys: string[]): string[] {
  if (!keys || !keys.length) {
    return [];
  }
  return keys.map((key: string) => {
    if (typeof key === 'string' && key.startsWith('$') && STORE.variables[key] !== undefined) {
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
  if (!keys || !results || keys.length > results.length) {
    console.log('Error: Mismtach in number of outs and keys'.red);
  }
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
