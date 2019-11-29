#!/usr/bin/env node

import 'colors';
import { findFiles, load } from './main';
import * as yargs from 'yargs';
import * as puppeteer from 'puppeteer';

let path: string = process.cwd();

const argv = yargs
  .command('path', 'The path to look for test files in', {
    path: {
      description: 'the path',
      alias: 'p',
      type: 'string',
    },
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

  if (files && files.length > 0) {
    console.log('Found files: '.green + files);

    files.forEach((file: string) => {
      console.log('Loading file: '.green + file);
      require(path + file);
    });

    const browser = await puppeteer.launch({ headless: false });

    console.log('Loading browser into context'.yellow);
    load('context', () => {
      return { browser: browser };
    });

    await browser.close();
  } else {
    console.warn('No files found'.yellow);
  }
})().catch(err => console.error('Error: '.red, err));
