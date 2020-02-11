import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/*
 * add text by using contextual tolbar
 */
export default class AddTextToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    console.log('add text start')
    /* await driver
    .actions({ bridge: true })
    .pause(3000)
    .perform(); */
    const textButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[1]/div/button')
    );
    console.log('test btn is displayed  ::::: ', await textButton.isDisplayed());
    await textButton.click();

    await driver
      .actions({ bridge: true })
      .pause(3000)
      .sendKeys(args[0])
      .pause(2000)
      .perform();
    console.log(args);
    return [''];
  }
}
