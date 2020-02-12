import Action from '../../action.i';
import { WebDriver, By, Key } from 'selenium-webdriver';

/* 
    * Edit the linked url with hyperlink text
 */
export default class EditHyperlinkText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const editBtn = await driver.findElement(
      By.xpath(
        '/html/body/app-root/ng-component/div/div/div[1]/diagram-area/div/hyperlink-editor/div/div/div/button[1]'
      )
    );
    await editBtn.click();
    await driver
      .actions({ bridge: true })
      .pause(2000)
      .keyDown(Key.CONTROL)
      .sendKeys('a')
      .keyDown(Key.DELETE)
      .sendKeys(args[0])
      .perform();
    return [''];
  }
}
