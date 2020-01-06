import { Page } from 'puppeteer';
import Action from '../action.i';
/**
 * Drag and drop a shape
 */

export default class DragAndDrop implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var page: Page = context.page;
    console.log(args[0]);
    /*   for(var i = 0 ; i <=3 ;i++){
            await page.waitFor(1000);
            // await page.mouse.move(78,188);
            await page.mouse.move(30,66);
            /*  await page.waitFor(300);
             await page.mouse.down();
             await page.waitFor(300) */
    // await page.mouse.move(584,187);
    /*   await page.mouse.move(347,120,{steps:1000});
             await page.waitFor(300); */
    //await page.mouse.down();
    /*  await page.mouse.up();
             console.log('end'); */
    //  }

    await page.mouse.move(71, 184);
    await page.waitFor(500);
    await page.mouse.down();
    // await page.waitFor(500);
    await page.mouse.move(123, 345);
    await page.mouse.up();
    await page.waitFor(500);
    /* await page.mouse.move(356,1508);
       await page.mouse.down();
       await page.mouse.move(438,119);
       await page.mouse.up(); */
    return ['data'];
  }
}
