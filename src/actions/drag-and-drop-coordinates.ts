import { WebDriver, Origin } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Drag and drop an element to the specified coordinates.
 */
export default class DragAndDropCoordinates implements Action {

  async execute(args: any[], context: any, ): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const startX: number = args[0];
    const startY: number = args[1];
    const endX: number = args[2];
    const endY: number = args[3];
    const duration: number = args[4];
    
    await driver.actions({ bridge: true })
      .move( { origin: Origin.VIEWPORT, x: startX, y: startY })
      .press()
      .move( { origin: Origin.VIEWPORT, x: endX, y: endY, duration: duration })
      .release()
      .perform();

    return [''];
  }

}
