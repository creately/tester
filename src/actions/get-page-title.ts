import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Returns the page height.
 */
export default class GetPageHeight implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    const data = await page.title();
    return [data];
  }
}
