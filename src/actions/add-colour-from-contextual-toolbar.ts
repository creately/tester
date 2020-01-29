import Action from "../action.i";
import { By, WebDriver } from "selenium-webdriver";

export default class AddColourFromContextualToolbar implements Action{
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        const colourButton = await driver.findElement(
            By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-shape-style-dropdown')
          );
          await colourButton.click();
          console.log(args)
        return['']

    }
    
}