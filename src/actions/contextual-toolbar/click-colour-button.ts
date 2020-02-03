import Action from '../../action.i';
import { By, WebDriver } from 'selenium-webdriver';

/*
 * click colur button of contextual tolbar
 */
export default class ClickColourButtonContextualToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const colourButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-shape-style-dropdown')
    );
    await colourButton.click();
    const allColourCode = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-shape-style-dropdown/div/abs-dropdown/div/div[2]/div')
    );
    const isDisplayed = await allColourCode.isDisplayed();
    return [isDisplayed.toString(), args.toString()];
  }
}