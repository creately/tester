import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/*
 * draw the line by using contextual tolbar
 */
export default class AddTLineContextualToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const lineButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[2]/div/button')
    );
    await lineButton.click();
    await driver
      .actions({ bridge: true })
      .pause(2000)
      .move({ x: args[0], y: args[1] })
      .press()
      .release()
      .pause(2000)
      .perform();
    return [''];
  }
}
