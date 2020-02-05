import { WebDriver, until, By, WebElement } from 'selenium-webdriver';
import Action from '../../action.i';

/**
 * Waits for specified element to be found and invisible to user.
 */
export default class WaitForElementNotVisible implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const elementXPath: string = args[0];
    const element: WebElement = await driver.findElement(By.xpath(elementXPath));
    await driver.wait(until.elementIsNotVisible(element));
    return [''];
  }
}
