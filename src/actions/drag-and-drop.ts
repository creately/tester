import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Drag and drop a shape
 */

export default class DragAndDrop implements Action {

    async execute(args: string[], context: any): Promise<string[]> {

        var page: Page = context.page;
        console.log(args[0]);
        await page.waitFor(1000);
        // page.mouse.click(128, 26, { delay: 1000 });
        await page.mouse.move(76,186);
        await page.waitFor(300);
        await page.mouse.down();
        await page.waitFor(1000)
        await page.mouse.move(666,176);
        await page.waitFor(1000);
        /* await page.mouse.down();
        await page.waitFor(1000); */
        await page.mouse.up();
        console.log('end');
        return ['data'];
    }
}

