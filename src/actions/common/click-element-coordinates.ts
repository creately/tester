import Action from '../../action.i';
import { WebDriver } from 'selenium-webdriver';

export default class ClickElementByCoordinates implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;

    await driver
      .actions({ bridge: true })
      .pause(5000)
      .move({ x: args[0], y: args[1] })
      .pause(2000)
      .press()
      .release()
      .pause(1000)
      .perform();
    console.log('click x,y');
    return [''];
  }
}
