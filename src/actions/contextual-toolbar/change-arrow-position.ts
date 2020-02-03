import Action from '../../action.i';
import { By, WebDriver } from 'selenium-webdriver';

/*
 *  Change the arrow position on line
 */
export default class ChangeArrowPosition implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const arrowChangeButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[2]/div')
    );
    await arrowChangeButton.click();

    return [args.toString()];
  }
}
