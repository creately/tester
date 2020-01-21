import { WebDriver, By, WebElement } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Sends the specified text to the specified element.
 */
export default class SendTextToElement implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const elementXPath: string = args[0];
    const keys: string = args[1];
    const element: WebElement = await driver.findElement(By.xpath(elementXPath));
    await element.sendKeys(keys);
    return [''];
  }
}
