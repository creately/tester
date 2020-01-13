import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Wait functions related to the passed argument
 */

export default class PageWait implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    switch (args[0]) {
      case 'xpath':
        await page.waitForXPath(args[1]);
        break;
      case 'selector':
        await page.waitForSelector(args[1]);
        break;
    }
    return ['end'];
  }
}
