import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Resizes the page's viewport to the given height and width.
 */
export default class ResizeViewport implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    let page: Page = context.page;
    let width = args[0];
    let height = args[1];

    await page.setViewport({ width, height });

    const data = await page.evaluate(() => {
      return [
        document.documentElement.clientWidth.toString(undefined),
        document.documentElement.offsetHeight.toString(undefined),
      ];
    });

    return data;
  }
}
