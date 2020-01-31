import Action from '../../action.i';
import { By, WebDriver } from 'selenium-webdriver';

/*
 *  Change the line shape 
 *  Argument pass the shape index
 */
export default class ChangeLineShape implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const lineShapeButton = await driver.findElement(
        By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[1]/div')
      );
      await lineShapeButton.click();
      const lineShapeElement = await driver.findElement(
        By.xpath(
          '//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[1]/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item['+args[0]+']')
      );
      await lineShapeElement.click();
    return [''];
  }
}
