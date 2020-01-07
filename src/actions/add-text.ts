import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Drag and drop a shape
 */

export default class AddText implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    await page.mouse.move(args[0], args[1]);
    await page.waitFor(100);
    await page.keyboard.type("Hi");
    return ['x ,y'];
  }
}
