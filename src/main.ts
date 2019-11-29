import * as globby from 'globby';

let STORE: any = {};

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
 * Stores the given value under the given key
 * @param key the key to identify the store item with
 * @param value the object to store
 */
export function load(key: string, value: {}): void {
  if (STORE[key]) {
    STORE[key] = {...STORE[key], ...value};
  } else {
    STORE[key] = value;
  }
}

/**
 * Gets the value stored under the context key.
 */
function getContext(): any {
  return STORE['context'];
}

/**
 * Gets the value stored under the reporter key.
 */
function getReporter(): any {
  return STORE['reporter'];
}
