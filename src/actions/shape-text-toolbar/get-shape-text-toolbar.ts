import { WebDriver, By, Key } from 'selenium-webdriver';
import Action from '../../action.i';

export default class GetShapeTextToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const startX: number = args[0];
    const startY: number = args[1];

    await driver
      .actions({ bridge: true })
      .move({ x: startX, y: startY })
      .pause(1000)
      .keyDown(Key.CONTROL)
      .sendKeys("a")
      .perform();
     
    const shapeTextToolbar = await driver.findElement(By.xpath('//*[@id="shape-text-toolbar"]'));
    const isDisplayed = await shapeTextToolbar.isDisplayed();
    console.log(isDisplayed)
    return [isDisplayed.toString()];
  }
}
