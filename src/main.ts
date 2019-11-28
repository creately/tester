import * as globby from 'globby';

/**
 * Finds all files in the given path that match the given extension.
 * Looks through directories and sub directories. Default extension is '.test.js'.
 * @param path the path to search in
 * @param extensions a string array of extensions to look for
 * @returns a promise with an array of paths to found files
 */

export async function findFiles(path: string, extensions: string[] = ['.test.js']): Promise<string[]> {
  const fileTypes = extensions.map( ext => '**/*' + ext);
  const paths = await globby(fileTypes, {
    cwd: path,
  });

  return paths;
}
