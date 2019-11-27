#!/usr/bin/env node

const colors = require('colors');
const test = require('../lib/test');

const path = '/Users/jerome/projects/testfiles/';

(async () => {  
    const files = await test.findFiles(path);
    console.log('Found files: '.green + files);
    if (files) {
        files.forEach(file => {
            console.log('Loading file: '.green + file);
            if (file) require(path + file);
        });
    } else {
        console.error('No files found'.red);
    }
})()
.catch(err => console.error('Error: '.red, err));