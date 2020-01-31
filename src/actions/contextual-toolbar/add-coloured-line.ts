import Action from '../../action.i';
import { By, WebDriver } from 'selenium-webdriver';

/*
 *  Apply colured  lines 
 *  arags[0] refers the colour code index
 */
export default class AddColouredLine_ContextualToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    await driver
      .findElement(
        By.xpath(
          '//*[@id="contextual-toolbar"]/div/toolbar-shape-style-dropdown/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/div/div[2]/div[1]'
        )
      )
      .click();
    const colourCode = await driver.findElement(
      By.xpath(
        '//*[@id="contextual-toolbar"]/div/toolbar-shape-style-dropdown/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/div/div[3]/toolbar-shape-style-dropdown-item['+args[0]+']'
      )
    );
    await colourCode.click();
    return [''];
  }
}
