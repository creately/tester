import { Page } from 'puppeteer';
import Action from '../action.i';

/**
 * Find the element by ID or xpath & click the element
 */

export default class ClickElement implements Action {

    async execute(args: string[], context: any): Promise<string[]> {
        let  element : any;
        let data  = ['true'];
        const type = args[0];
        if (type === 'Xpath') {
            await page.waitForXPath(args[1]);
            element = await page.$(args[1]);
        } else if (type === 'ID') {
            element = await document.getElementById(args[1]);
        }
        await element.click();
        return data;
    }
}

