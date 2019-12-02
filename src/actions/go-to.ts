import 'colors';
import { Browser } from 'puppeteer';
import Action from '../action.i';

/**
 * Opens a new window for a given browser and navigates to a specified url.
 */

export default class GoTo implements Action {
  constructor() {}

  // @ts-ignore
  async execute(title: string, args: string[], outs: any[], context: any): Promise<any> {
    var browser: Browser = context.browser;
    let page = await browser.newPage();
    await page.goto(args[0]).catch(err => console.log(title.red, err));
    if (page) {
      process.stdout.write('.'.green);
    }
    return [page];
  }
}
