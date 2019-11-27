const globby = require('globby');
const colors = require('colors');
 
async function findFiles(directory) {
    console.log('Searching for files in: '.yellow + directory);
    const paths = await globby(['**/*.js'], {
        cwd: directory
    });
    
    return paths;
};

module.exports.findFiles = findFiles;