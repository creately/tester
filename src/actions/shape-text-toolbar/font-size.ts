import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

export default class FontSize implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const fontSizeBtn = await driver.findElement(
      By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-input-list-dropdown')
    );
    await fontSizeBtn.click();
    const dropDownList = await driver.findElement(
      By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-input-list-dropdown/div/abs-dropdown/div/div[2]/div/ul')
    );
    if (await dropDownList.isDisplayed()) {
      const fontSize = await driver.findElement(
        By.xpath(
          '//*[@id="shape-text-toolbar"]/div/toolbar-input-list-dropdown/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item[' +
            args[0] +
            ']'
        )
      );
      await fontSize.click();
    }

    return [args.toString()];
  }
}
