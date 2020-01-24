import { WebDriver } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Gets the page url.
 */
export default class GetUrl implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const currentURL = await (await driver.getCurrentUrl()).toString();
    await driver.manage().setTimeouts({ pageLoad: 1000 });
    return [currentURL];
  }
}
