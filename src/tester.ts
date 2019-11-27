#!/usr/bin/env node

import colors = require('colors');
const test = require('./main');
const yargs = require('yargs');

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
  path = argv.path;
}

if (!path.endsWith('/')) path += '/';

(async () => {
  console.log(colors.yellow('Searching for files in: ') + path);
  const files = await test.findFiles(path);

  if (files && files.length > 0) {
    console.log(colors.green('Found files: ') + files);
    files.forEach((file: string) => {
      console.log('Loading file: '.green + file);
      if (file) require(path + file);
    });
  } else {
    console.warn('No files found'.yellow);
  }
})().catch(err => console.error('Error: '.red, err));

export {};
