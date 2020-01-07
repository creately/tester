import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Drag and drop a shape
 */

export default class DragAndDrop implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    var x: any;
    var y: any;
    x = 260;
    y = 300;
    await page.mouse.move(args[0], args[1]);
    await page.waitFor(500);
    await page.mouse.down();
    await page.waitFor(200);
    await page.mouse.move(x,y);
    await page.mouse.up();
    await page.mouse.click(x,y);
    return [x ,y];
  }
}
