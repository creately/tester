import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

/* 
     * Change the font size of text
*/
export default class FontSize implements Action {
<<<<<<< HEAD
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        const fontSizeBtn = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-input-list-dropdown'));
        await fontSizeBtn.click();
        const dropDownList = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-input-list-dropdown/div/abs-dropdown/div/div[2]/div/ul'));
        if (await dropDownList.isDisplayed()) {
            const fontSize = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/toolbar-input-list-dropdown/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item['+args[0]+']/li'));
            await fontSize.click();
        }
        return [args.toString()];
=======
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
>>>>>>> 028d4da49d17459db163a5c90538521a44ba0dc1
    }

    return [args.toString()];
  }
}
