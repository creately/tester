import { WebDriver, By } from 'selenium-webdriver';
import Action from '../action.i';

export default class AddTextFromContextualToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const textButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[1]/div/button')
    );
    await textButton.click();
    await driver
      .actions({ bridge: true })
      .sendKeys(args[0])
      .perform();
    return [''];
  }
}