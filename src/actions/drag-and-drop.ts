import { Page } from 'puppeteer';
import Action from '../action.i';


/**
 * Drag and drop a shape
 */

export default class DragAndDrop implements Action {

  async execute(args: any[], context: any, event: MouseEvent): Promise<string[]> {
    var page: Page = context.page;

    console.log('select a shape');
    console.log('%%%%%%%%%%%')
    await page.mouse.move(args[0], args[1]);
    // await page.mouse.click(args[0], args[1])
    await page.waitFor(500);
    console.log("*************************");
    await page.mouse.down();
    await page.waitFor(200);
    var x = await event.offsetX;
    console.log(x, args[0]);
    console.log('%%%%%%%%%%%')
    await page.mouse.move(args[2], args[3]);
    await page.waitFor(300);
    await page.mouse.up();
    return ['end'];
  }

}
