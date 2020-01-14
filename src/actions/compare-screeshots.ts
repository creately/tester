import { Page } from 'puppeteer';
import Action from '../action.i';
const fs = require('fs');
const pixelmatch = require('pixelmatch');
const PNG = require('pngjs').PNG;
/**
 * compare the screenshot with expected image
 */

export default class CompareScreenshots implements Action {
    async execute(_args: string[], context: any): Promise<string[]> {
        var page: Page = context.page;
        const actualImage = PNG.sync.read(fs.readFileSync(_args[0]));
        const expectedImage = PNG.sync.read(fs.readFileSync(_args[1]));
        const { width, height } = actualImage;
        const differenceImage = _args[2];
        const diff = new PNG({ width, height });
        pixelmatch(actualImage.data, expectedImage.data, diff.data, width, height, { threshold: 0.1 });
        fs.writeFileSync(differenceImage, PNG.sync.write(diff));
        console.log(page);
        return['end'];
    }
}
