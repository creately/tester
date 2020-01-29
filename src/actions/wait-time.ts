import { WebDriver } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Waits for a specified amount of time.
 */
export default class WaitTime implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const time: number = args[0];
    await driver.manage().setTimeouts({ implicit: time });
    return [''];
  }
}
