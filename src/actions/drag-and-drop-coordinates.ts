import { WebDriver, Origin, By } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Drag and drop an element to the specified coordinates.
 */
export default class DragAndDropCoordinates implements Action {

  async execute(args: any[], context: any, ): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const originXPath = args[0];
    let origin;

    if ( originXPath ) {
      origin = driver.findElement(By.xpath(originXPath));
    } else {
      origin = Origin.VIEWPORT;
    }

    const startX: number = args[1];
    const startY: number = args[2];
    const endX: number = args[3];
    const endY: number = args[4];
    const duration: number = args[5];
    
    await driver.actions({ bridge: true })
      .move( { origin: origin, x: startX, y: startY })
      .press()
      .move( { origin: origin, x: endX, y: endY, duration: duration })
      .release()
      .perform();

    return [''];
  }

}
