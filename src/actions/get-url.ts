import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Gets the page url.
 */
export default class GetUrl implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    const data = await page.evaluate(() => {
      return [document.URL];
    });
    return data;
  }
}
