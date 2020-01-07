import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Edit the document title
 */

export default class EditDocumentTitle implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    var [titleElement] = await page.$x('//div[contains(text(), "Untitled Document")]');
    await titleElement.click({ clickCount: 3 });
    await titleElement.press('Backspace');
    await page.waitFor(200);
    await titleElement.type(_args[0]);
    return [_args[0]];
  }
}
