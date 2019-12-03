import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Opens a new window for a given browser and navigates to a specified url.
 */

export default class GoTo implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    await page.goto(args[0]);
    const data = await page.evaluate(() => {
      return [ document.URL ];
    });
    return data;
  }
}
