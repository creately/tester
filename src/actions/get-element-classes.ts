import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Searches for an element by it's ID and returns it's classes.
 */

export default class GetElementClasses implements Action {
 
  async execute(args: string[], context: any): Promise<string[]> {
    let elementId = args[0];
    var page: Page = context.page;
    const data = await page.evaluate(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        return [element.classList.value.split(' ').join(',')];
      } else {
        return [];
      }
    }, elementId);
    return data;
  }
}
