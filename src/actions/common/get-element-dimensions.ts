import { Page } from 'puppeteer';
import Action from '../../action.i';

/**
 * Returns the dimensions of the given element, if found on the DOM.
 */
export default class GetElementDimensions implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    let elementId = args[0];
    var page: Page = context.page;
    const data = await page.evaluate(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        return [element.offsetWidth.toString(undefined), element.offsetHeight.toString(undefined)];
      } else {
        return [];
      }
    }, elementId);
    return data;
  }
}
