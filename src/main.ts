import * as globby from 'globby';
import store from './store.type';
import spec from './spec.type';
import test from './test.type';

const STORE: store = {
  context: {},
  reporters: [],
};

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
 * Gets stored tests.
 */
function getTests(): test[] {
  return TESTS;
}
