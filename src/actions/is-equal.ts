import Action from '../action.i';

/**
 * Checks two given values for equality.
 */
export default class IsEqual implements Action {
  async execute(args: string[], _context: any): Promise<string[]> {
    if (args[0] === args[1]) {
      return ['true'];
    } else {
      return ['false'];
    }
  }
}
