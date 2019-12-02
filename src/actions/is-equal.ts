import 'colors';
import * as _ from 'lodash';
import Action from '../action.i';

/**
 * Checks two given sets of values for equality.
 */
export default class IsEqual implements Action {
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
