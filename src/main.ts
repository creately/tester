import * as globby from 'globby';
import store from './store.type';
import testCase from './test-case.type';

const STORE: store = {
  context: {},
  reporters: [],
};

const ACTIONS: any = [];

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
 * Gets the value stored under the context key.
 */
function getContext(): any {
  return STORE.context;
}

/**
 * Gets the value stored under the reporter key.
 */
// function getReporter(): any {
//   return STORE['reporter'];
// }

export function registerAction(action: any): void {
  if (!ACTIONS.includes(action)) {
    ACTIONS.push(action);
  }
}

export async function execute(cases: testCase[]) {
  cases.forEach((val: testCase) => {
    if (ACTIONS.includes(val.action)) {
      let context = getContext();
      let action = new val.action();
      let expected = val.outs;
      (async () => {
        let result = await action.execute(val.args, context);
        if (arraysEqual(expected, result)) {
          console.log('SUCCESS: '.green, val.name.green);
          return true;
        } else {
          console.log('FAILURE: '.red, val.name.red);
          console.log('Expected: ', expected, ', got: ', result);
          return false;
        }
      })().catch(err => console.log('Error: ', err));
    }
  });
}

function arraysEqual(a: any[], b: any[]): boolean {
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
