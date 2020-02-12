import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/* 
 * Stikethrough the text
*/
export default class Stiketrough implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const italianText = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[3]'));
    await italianText.click();
    return [args.toString()];
  }
}