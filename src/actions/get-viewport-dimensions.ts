import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Returns the viewport width and height.
 */

export default class GetViewportDimensions implements Action {
  async execute(_args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    return [ page.viewport().width.toString(undefined), page.viewport().height.toString(undefined) ];
  }
}
