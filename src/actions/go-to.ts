import { WebDriver } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Navigates to a specified url.
 */

export default class GoTo implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    await driver.get(args[0]);
    return [''];
  }
}
