import { WebDriver, By } from 'selenium-webdriver';
import Action from '../action.i';

export default class GetContextualToolbar implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;

    const startX: number = args[1];
    const startY: number = args[2];

    await driver
      .actions({ bridge: true })
      .move({ x: startX, y: startY })
      .press()
      .release()

      .pause(1000)
      .perform();

    const canvasToolbar = await driver.findElement(By.xpath('//*[@id="contextual-toolbar"]/div'));
    const isDisplayed = await canvasToolbar.isDisplayed();
    return [isDisplayed.toString()];
  }
}
