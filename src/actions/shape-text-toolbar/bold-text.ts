import { WebDriver, By } from 'selenium-webdriver';
import Action from '../../action.i';

export default class BoldText implements Action {
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        const boldText = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]/div/icon-button[1]'));
        await boldText.click();
        await driver
            .actions({ bridge: true })
            .press()
            .release()
            .perform();

        return [args.toString()];
    }
}
