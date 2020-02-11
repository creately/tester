import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

export default class ItalianText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const italianText = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[2]'));
    await italianText.click();
    await driver
      .actions({ bridge: true })
      .press()
      .release()
      .perform();

    return [args.toString()];
  }
}
