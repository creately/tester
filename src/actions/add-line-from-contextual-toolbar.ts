import { WebDriver, By } from 'selenium-webdriver';
import Action from '../action.i';


export default class AddTLineFromContextualToolbar implements Action {

  async execute(args: any[], context: any): Promise<string[]> {

    var driver: WebDriver = context.driver;
    const lineButton = await driver.findElement(
        By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[2]/div/button')
      );
      await lineButton.click();
      await driver
        .actions({ bridge: true })
        .move({ x: args[0], y: args[1] })
        .release()
        .pause(2000)
        .perform();
        return[''];
  }

}
