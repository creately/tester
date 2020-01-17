import { Page } from 'puppeteer';
import Action from '../action.i';



export default class AddShape implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    await page.mouse.move(args[0], args[1])
    await page.waitFor(500);
    await page.mouse.click(args[0], args[1]);
    await page.waitFor(200);
    await page.mouse.move(args[2], args[3]);
    await page.mouse.click(args[2], args[3]);
    return ['end'];
  }
}
