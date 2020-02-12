import Action from '../../action.i';
import { WebDriver, By } from 'selenium-webdriver';

/* 
 * Hyperlink the text by adding the url
*/
export default class AddHyperlink implements Action {
<<<<<<< HEAD
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        const hyperlinkBtn = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[5]'));
        await hyperlinkBtn.click();
    const textArea = await driver.findElement(By.xpath('/html/body/app-root/ng-component/div/div/div[1]/diagram-area/div/hyperlink-editor/div/div[1]/div/text-input/div/div/input'));
console.log(args,await textArea.isDisplayed());
await textArea.click();
           // await textArea.sendKeys('ppp');
            await driver
            .actions({bridge : true})
           // .move({origin : textArea})
            .pause(3000)
            .sendKeys('o')
            .pause(5000)
           // .keyDown(Key.ENTER)
            .pause(2000)
            .perform();
            return[''];
    }
=======
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const hyperlinkBtn = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[5]'));
    await hyperlinkBtn.click();
    const textArea = await driver.findElement(
      By.xpath(
        '/html/body/app-root/ng-component/div/div/div[1]/diagram-area/div/hyperlink-editor/div/div[1]/div/text-input/div/div/input'
      )
    );
    await textArea.sendKeys(args[0]);
    await driver
      .actions({ bridge: true })
      .keyDown(Key.ENTER)
      .perform();
    return [''];
  }
>>>>>>> 028d4da49d17459db163a5c90538521a44ba0dc1
}
