import Action from '../../action.i';
import { By, WebDriver } from 'selenium-webdriver';

/*
 *  Add left arrow for the line
 *  Argument pass the arrow index
 */
export default class AddLeftArrow implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const leftArrowButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[2]')
    );
    await leftArrowButton.click();
    const leftArrowShape = await driver.findElement(
      By.xpath(
        '//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[2]/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item[' +
          args[0] +
          ']'
      )
    );
    await leftArrowShape.click();
    return [''];
  }
}
