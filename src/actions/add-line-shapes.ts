import { WebDriver, By } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Change the line shapes
 */
export default class AddLineShpes implements Action {
    async execute(args: string[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        await driver
            .actions({ bridge: true })
            .click()
            .pause(1000)
            .perform();
        const toolBar = await driver.findElement(By.xpath('//*[@id="contextual-toolbar"]'));
        const isDispayedToolBar = await toolBar.isDisplayed();
        /* 
            args[1] refers to drop down element index
        */
        if (isDispayedToolBar) {
            switch (args[0].toLowerCase()) {
                case 'line shape':
                    const lineShapeButton = await driver.findElement(
                        By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[1]/div')
                    );
                    await lineShapeButton.click();
                    const lineShapeElement = await driver.findElement(
                        By.xpath(
                            '//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[1]/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item[' +
                            args[1] +
                            ']'
                        )
                    );
                    await lineShapeElement.click();
                    break;
                case 'line text':
                    const textButton = await driver.findElement(By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[1]'));
                    await textButton.click();
                    const textElement = await driver.switchTo().activeElement();
                    textElement.sendKeys(args[1]);
                    break;
                case 'left arrow':
                    const leftArrowButton = await driver.findElement(
                        By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[2]')
                    );
                    await leftArrowButton.click();
                    const leftArrowShape = await driver.findElement(
                        By.xpath(
                            '//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[2]/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item[' + args[1] + ']'
                        )
                    );
                    await leftArrowShape.click();
                    break;
                case 'right arrow':
                    const rightArrowButton = await driver.findElement(
                        By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[3]')
                    );
                    await rightArrowButton.click();
                    const rightArrowShape = await driver.findElement(
                        By.xpath(
                            '//*[@id="contextual-toolbar"]/div/toolbar-list-dropdown[3]/div/abs-dropdown/div/div[2]/div/ul/perfect-scrollbar/div/div[1]/toolbar-list-dropdown-item[4]'
                        )
                    );
                    await rightArrowShape.click();
                    break;
            }
        }
        await driver.actions({ bridge: true })
            .pause(1000)
            .press()
            .release()
            .perform();
        return [''];
    }
}
