import Action from '../../action.i';
import { WebDriver } from 'selenium-webdriver';

export default class MouseMove implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    console.log('mouse move started ******', args[0], args[1]);
/*     await driver
      .actions({ bridge: true })
      .pause(4000)
      .move({ x: 370, y: 180 })
      .press()
      .release()
      // .click()
      .pause(3000)
      .perform(); */
    await driver
      .actions({ bridge: true })
      .pause(4000)
      .move({ x: args[0], y: args[1] })
      .press()
      .release()
      // .click()
      .pause(3000)
      .perform();
    console.log('mouse move completed ******');
    return [''];
  }
}
