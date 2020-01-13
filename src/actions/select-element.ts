import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Search the element by CSS selector
 */

export default class SelectElement implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    page.hover(args[0]);
    return ['data'];
  }
}
