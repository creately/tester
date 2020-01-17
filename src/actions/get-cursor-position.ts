import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Drag and drop a shape
 */

export default class GetCursorPosition implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;

    console.log(args[0]);
    await page.mouse.move(89, 90);
    const ele = await page.$('#interaction-area-canvas');
    const box = await ele?.boundingBox();
    console.log(box);
    return ['end'];
  }
}
