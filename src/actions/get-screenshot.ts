import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Gets the screenshots
 */

export default class GetScreenshot implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    await page.screenshot({ path: _args[0] });
    return ['ddat'];
  }
}
