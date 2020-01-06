import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Drag and drop a shape
 */

export default class DragAndDrop implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    console.log(args[0]);
    await page.mouse.move(71, 184);
    await page.waitFor(500);
    await page.mouse.down();
    await page.mouse.move(123, 345);
    await page.mouse.up();
    await page.waitFor(500);
    console.log("end*******");
    return ['data'];
  }
}
