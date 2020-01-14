import { Page } from 'puppeteer';
import Action from '../action.i';


/**
 * Drag and drop a shape
 */

export default class DragAndDrop implements Action {

  async execute(args: any[], context: any, ): Promise<string[]> {
    var page: Page = context.page;
    const ele = await page.$('#interaction-area-canvas');
    var box = await ele?.boundingBox();
    var x = Number(box?.x);
    var y = Number(box?.y)
    await page.mouse.move(args[0], args[1]);
    await page.waitFor(500);
    await page.mouse.down();
    await page.waitFor(200);
    await page.mouse.move(x + 300, y + 300);
    await page.mouse.up();
    return ['end'];
  }

}
