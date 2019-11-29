import { Action } from './action.i';
import { Browser } from 'puppeteer';
import * as util from 'util';

export default class GoTo implements Action {
  constructor(){}

  async execute(args: string[], context: any): Promise<any> {
    console.log('execute called');
    var browser: Browser = context.browser;

    console.log(util.inspect(context, false, 1, true));
    let page = await browser.newPage();
    await page.goto(args[0]);

    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        url: document.URL
      }
    })

    return dimensions;
  }
}