import { Action } from './action.i';
import { Browser } from 'puppeteer';

export default class GoTo implements Action {
  constructor() {}

  async execute(args: string[], context: any): Promise<any> {
    var browser: Browser = context.browser;

    let page = await browser.newPage();
    await page.goto(args[0]);

    const dimensions = await page.evaluate(() => {
      return [
        document.URL,
      ];
    });

    return dimensions;
  }
}
