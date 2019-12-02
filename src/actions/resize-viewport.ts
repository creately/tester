import 'colors';
import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Resizes a given page's viewport to the given height and width.
 */
export default class ResizeViewport implements Action {
  constructor() {}

  // @ts-ignore
  async execute(title: string, args: any[], outs: any[], context: any): Promise<any> {
    let page: Page = args[0];
    let width = args[1];
    let height = args[2];

    await page.setViewport({ width, height });

    const data = await page
      .evaluate(() => {
        return [document.documentElement.clientWidth, document.documentElement.offsetHeight];
      })
      .catch(err => console.log(title.red, err));

    if (data) {
      process.stdout.write('.'.green);
    }

    return data;
  }
}
