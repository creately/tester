import { WebDriver, By, WebElement } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Waits for specified element to be found and invisible to user.
 */
export default class ClickElement implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const elementXpath: string = args[0];
    const element: WebElement = await driver.findElement(By.xpath(elementXpath));
    await element.click();
    return [''];
  }
}
