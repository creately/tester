import * as puppeteer from 'puppeteer';

/**
 * A function that creates a puppeteer browser instance
 * @returns void or a puppeteer browser instance
 */
export async function getBrowser(options: {} = {}): Promise<puppeteer.Browser> {
  return await puppeteer.launch(options);
}
