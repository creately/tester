import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Find the element by ID or xpath & click the element
 */

export default class ClickElement implements Action {
  async execute(args: any[], context: any): Promise<string[]> {
    var page: Page = context.page;
    if (args[0] === "xpath") {
      await page.waitForXPath(args[1]);
      const [btn] = await page.$x(args[1]);
      if (btn) {
        await btn.click();
        await page.waitFor(20000);
      }
    }else if(args[0]==="X&Y"){
      await page.click(args[1],args[2]);
    }

    return ['data'];
  }
}
