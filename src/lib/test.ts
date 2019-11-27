import globby = require('globby');

async function findFiles(path: string) {
  const paths = await globby(['**/*.test.js'], {
    cwd: path,
  });

  return paths;
}

module.exports.findFiles = findFiles;
