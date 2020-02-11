import Action from '../../action.i';
import { WebDriver, By } from 'selenium-webdriver';

export default class DeleteHyperlinkText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const deleteBtn = await driver.findElement(
      By.xpath(
        '/html/body/app-root/ng-component/div/div/div[1]/diagram-area/div/hyperlink-editor/div/div/div/button[2]'
      )
    );
    await deleteBtn.click();
    return [args.toString()];
  }
}
