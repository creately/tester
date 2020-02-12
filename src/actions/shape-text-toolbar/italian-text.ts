import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/* 
 * Change the text style to Italian
*/
export default class ItalianText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const italianText = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[2]'));
    await italianText.click();
    return [args.toString()];
  }
}
