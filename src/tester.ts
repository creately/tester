#!/usr/bin/env node

import 'colors';
import * as yargs from 'yargs';
import { findFiles, load, runTests } from './main';
import { getBrowser } from './puppeteer-helper';

let path: string = process.cwd();

const argv = yargs
  .command('path', 'The path to look for test files in', {
    path: {
      description: 'the path to test files',
      alias: 'p',
      type: 'string',
    },
  })
  .option('close', {
    alias: 'c',
    type: 'boolean',
    description: 'Close browser when tests are complete'
  })
  .option('show', {
    alias: 's',
    type: 'boolean',
    description: 'Show browser instead of running in headless mode'
  })
  .help()
  .alias('help', 'h').argv;

if (argv.path) {
  path = String(argv.path);
}

if (!path.endsWith('/')) {
  path += '/';
}

(async () => {
  console.log('Searching for files in: '.yellow + path);
  const files: string[] = await findFiles(path);

  if (!files || files.length == 0) {
    console.warn('No files found'.yellow);
  }

  console.log('Found files: '.green + files);

  files.forEach((file: string) => {
    console.log('Loading file: '.green + file);
    require(path + file);
  });

  let config = {};

  if (argv.show) {
    config = {
      headless: false
    }
  }
  const browser = await getBrowser(config);

  console.log('Loading browser into context'.yellow);
  load('context', () => {
    return { browser: browser };
  });

  console.log('Executing test cases'.yellow);
  await runTests();
  
  if (argv.close) {
    await browser.close();
  }

  console.log('\nCompleted');
})().catch(err => console.error('Error: '.red, err));
