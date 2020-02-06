import Action from '../../action.i';
import { WebDriver } from 'selenium-webdriver';
import GetCursorPosition from '../common/get-cursor-position';

/* 
 * Scale the shape by according to given x & y coordinates
*/
export default class ScaleShape implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;

    await driver
      .actions({ bridge: true })
      .pause(4000)
      .move({ x: args[0], y: args[1] })
      .pause(2000)
      .press()
      .move({ x: args[2], y: args[3] })
      .pause(2000)
      .press()
      .release()
      .perform();
     const {x,y} = GetCursorPosition()

console.log(x,y)
    return [''];
  }
}
