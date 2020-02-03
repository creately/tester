import Action from '../../action.i';
import { By, WebDriver } from 'selenium-webdriver';

/*
 *  Add right arrow for the line
 *  Argument pass the arrow index
 */
export default class AddRightArrow implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const rightArrowButton = await driver.findElement(
      By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[3]')
    );
    await rightArrowButton.click();
    const rightArrowShape = await driver.findElement(
      By.xpath(
        '//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[3]/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item[' +
          args[0] +
          ']'
      )
    );
    await rightArrowShape.click();
    return [''];
  }
}
