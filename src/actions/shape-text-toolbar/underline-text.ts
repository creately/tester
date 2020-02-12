import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/*
 * Underline the text
 */
export default class UnderlineText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const underlineText = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[4]'));
    await underlineText.click();
    return [args.toString()];
  }
}
