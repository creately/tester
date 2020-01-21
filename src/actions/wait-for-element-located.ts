import { WebDriver, until, By } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Waits for specified element to load.
 */
export default class WaitForElementLocated implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const elementXpath: string = args[0];
    await driver.wait(until.elementLocated(By.xpath(elementXpath)))
    return [''];
  }
}
