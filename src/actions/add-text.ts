import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Add text inside the text area
 */

export default class AddText implements Action {
    async execute(args: any[], context: any): Promise<string[]> {
        var page: Page = context.page;
        var text = args[2];
        await page.mouse.move(args[0], args[1]);
        await page.waitFor(100);
        await page.keyboard.type(text);
        return ['end'];
    }
}
