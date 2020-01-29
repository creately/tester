import { WebDriver, By } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Add text , line or colour from using canvas toolbar
 */
export default class AddCanvasToolbarElements implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;

    const startX: number = args[1];
    const startY: number = args[2];

    await driver
      .actions({ bridge: true })
      .pause(1000)
      .move({ x: startX, y: startY })
      .click()
      .pause(1000)
      .perform();
await driver.actions().click();
    const canvasToolbar = await driver.findElement(By.xpath('//*[@id="contextual-toolbar"]/div'));
    const isDisplayed = await canvasToolbar.isDisplayed();
    if (isDisplayed) {
      switch (args[0].toLowerCase()) {
        case 'text':
          const textButton = await driver.findElement(
            By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[1]/div/button')
          );
          await textButton.click();
          await driver
            .actions({ bridge: true })
            .sendKeys(args[3])
            .perform();
          break;

        case 'line':
          const lineButton = await driver.findElement(
            By.xpath('//*[@id="contextual-toolbar"]/div/icon-button[2]/div/button')
          );
          await lineButton.click();
          await driver
            .actions({ bridge: true })
            .move({ x: args[3], y: args[4] })
            .release()
            .pause(2000)
            .perform();
          break;
        case 'colour':
          const colourButton = await driver.findElement(
            By.xpath('//*[@id="contextual-toolbar"]/div/toolbar-shape-style-dropdown')
          );
          await colourButton.click();
          break;
        default:
          break;
      }
    }
    return [''];
  }
}
