import Action from '../../action.i';
import { WebDriver, By, Key } from 'selenium-webdriver';

export default class AddHyperlink implements Action {
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        const hyperlinkBtn = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[5]'));
        await hyperlinkBtn.click();
    const textArea = await driver.findElement(By.xpath('/html/body/app-root/ng-component/div/div/div[1]/diagram-area/div/hyperlink-editor/div/div[1]/div/text-input/div/div/input'));
            await textArea.sendKeys(args[0]);
            await driver
            .actions({bridge : true})
            .keyDown(Key.ENTER)
            .perform();
            return[''];
    }
}
