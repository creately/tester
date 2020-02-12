import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/*
 * add text by using contextual tolbar
 */
export default class AddTextToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
<<<<<<< HEAD
=======
    console.log('add text start');
    /* await driver
    .actions({ bridge: true })
    .pause(3000)
    .perform(); */
>>>>>>> 028d4da49d17459db163a5c90538521a44ba0dc1
    const textButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[1]/div/button')
    );
    await textButton.click();
    await driver
      .actions({ bridge: true })
      .pause(3000)
      .sendKeys(args[0])
      .pause(2000)
      .perform();
    return [''];
  }
}
