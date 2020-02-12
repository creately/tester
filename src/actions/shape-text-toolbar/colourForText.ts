import Action from '../../action.i';
import { WebDriver, By } from 'selenium-webdriver';

/*
 * Add colour for  the text by using shape text toolbar
 */
export default class ColourForText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const colourBtn = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-grid-dropdown'));
    await colourBtn.click();
    const colourCodeList = await driver.findElement(
      By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-grid-dropdown/abs-dropdown/div/div[2]/div/ul')
    );
    if (await colourCodeList.isDisplayed()) {
      const colourCode = await driver.findElement(
        By.xpath(
          '//*[@id="shape-text-toolbar"]/div/toolbar-grid-dropdown/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-grid-dropdown-item[' +
            args[0] +
            ']'
        )
      );
      await colourCode.click();
    }
    return [''];
  }
}
