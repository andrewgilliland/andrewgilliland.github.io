"use server";
import fs from "fs";
import path from "path";

export const isPathDirectory = async (path: string): Promise<boolean> => {
  try {
    const stats = await fs.promises.stat(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

export const getFilesPaths = (rootDirectory: string): string[] => {
  let entries = fs.readdirSync(rootDirectory, { withFileTypes: true });

  let files = entries
    .filter((entry) => !entry.isDirectory())
    .map((entry) => path.join(rootDirectory, entry.name)); // maps to an array of file paths

  let directories = entries.filter((entry) => entry.isDirectory());

  for (let directory of directories) {
    let subdirPaths = getFilesPaths(
      path.join(`${rootDirectory}`, directory.name)
    );

    files = files.concat(subdirPaths); // adds the file paths from the subdirectories
  }

  return files;
};
