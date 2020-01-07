import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Search the element and hover
 */

export default class SelectElement implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    console.log(args[0]);
    page.hover(args[0]);
    return ['data'];
  }
}
