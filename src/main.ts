import * as globby from 'globby';

async function findFiles(path: string): Promise<string[]> {
  const paths = await globby(['**/*.test.js'], {
    cwd: path,
  });

  return paths;
}

module.exports.findFiles = findFiles;
