import Assert from '../assert.i';

/**
 * Asserts if the first given value is less than the second.
 */

export default class LessThan implements Assert {
  async execute(args: string[]): Promise<boolean> {
    var arr = args[0].split(',');
    return arr.includes(arr[1]);
  }
}
