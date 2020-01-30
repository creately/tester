import { WebDriver } from 'selenium-webdriver';
import Action from '../../action.i';

/**
 * Returns the page title.
 */
export default class GetPageTitle implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const title = await driver.getTitle();
    return [title];
  }
}
