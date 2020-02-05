import { Page } from 'puppeteer';
import Action from '../../action.i';

/**
 * Returns the page dimensions.
 */
export default class GetPageDimensions implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    const data = await page.evaluate(() => {
      return [
        document.documentElement.clientWidth.toString(undefined),
        document.documentElement.clientHeight.toString(undefined),
      ];
    });
    return data;
  }
}
