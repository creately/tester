import globby = require('globby');
import colors = require('colors');

async function findFiles(directory: string) {
  console.log(colors.yellow('Searching for files in: ') + directory);
  const paths = await globby(['**/*.test.js'], {
    cwd: directory,
  });

  return paths;
}

module.exports.findFiles = findFiles;
