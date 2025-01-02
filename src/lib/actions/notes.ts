"use server";
import { DirectoryNode, Note, NoteFrontmatter } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import { getFilesPaths, transformDirectoryPath } from "../utils/fs";
import { parentPath } from "../constants";

const getNotes = async (): Promise<{ notes: Partial<Note>[] }> => {
  let filePaths = await getFilesPaths(parentPath);

  const notes = filePaths.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(markdownWithMeta);
    const frontmatter = data as NoteFrontmatter;

    frontmatter.date = new Date(frontmatter.date);

    const note = {
      path: filePath
        .replace("src/markdown/notes/", "./notes/")
        .replace(".md", ""),
      frontmatter,
    };

    return note;
  });

  notes.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime(),
  );

  return {
    notes,
  };
};

// Function to get the note directory
// This function reads the directory and builds the FileTree of the Notes directory
// If it is a directory, it will recursively call itself to build the tree of the subdirectories and files
// If it is a file, it will return the file name, the title from the markdown frontmatter, and the file path
// The function returns the tree of the Notes directory
// The tree is an object with the name of the directory and an array of children
// Each child can be a directory or a file
// The FileTree component will render the tree

const getNotesFileTree = async (path: string): Promise<DirectoryNode> => {
  // ! Await does have an effect on this expression
  const transformedPath = await transformDirectoryPath(path);

  const decodedPath = decodeURIComponent(transformedPath);

  return new Promise((resolve) => {
    const isDirectory = fs.lstatSync(decodedPath).isDirectory();

    if (isDirectory) {
      const directory: DirectoryNode = {
        name: decodedPath.split("/").pop()!,
        children: [],
      };

      const files = fs.readdirSync(decodedPath, {
        withFileTypes: true,
      });

      files.forEach((file) => {
        if (file.isDirectory()) {
          getNotesFileTree(`${decodedPath}/${file.name}`).then((res) => {
            directory.children!.push(res);
          });
        } else {
          const markdownWithMeta = fs.readFileSync(
            `${decodedPath}/${file.name}`,
            "utf-8",
          );
          const { data } = matter(markdownWithMeta);
          const frontmatter = data as NoteFrontmatter;

          const fileNode = {
            name: file.name.replace(".md", ""),
            title: frontmatter.title,
            path: `${path.replace("./src/markdown/notes", "").replace(" ", "-").toLocaleLowerCase()}/${file.name.replace(
              ".md",
              "",
            )}`,
          };

          directory.children!.push(fileNode);

          return resolve(directory);
        }
      });
    }
  });
};

export { getNotes, getNotesFileTree };
