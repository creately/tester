import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Find the element by ID or xpath & click the element
 */

export default class ClickElement implements Action {

    async execute(args: string[], context: any): Promise<string[]> {
        var page: Page = context.page;
        await page.waitForXPath( args[0] );
        const [btn] = await page.$x(args[0]);
        if (btn) {
            await btn.click();
            await page.waitFor(20000);
        }
        return ['data'];
    }
}

