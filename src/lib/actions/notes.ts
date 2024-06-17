"use server";
import { Note } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { isPathDirectory } from "../utils/fs";

const getNotes = async (): Promise<{ notes: Note[] }> => {
  function getFilesPaths(rootDirectory: string) {
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
  }

  let filePaths = getFilesPaths("./posts");

  const notes = filePaths.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    frontmatter.date = new Date(frontmatter.date);

    const note = {
      path: filePath.replace(/\.md$/, "").replace(/^posts\//, "notes/"),
      frontmatter,
    };

    return note;
  });

  // posts.sort(
  //   (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  // );

  return {
    notes: notes,
  };
};

const getNoteDirectory = async (pagePath: string) => {
  const isDirectory = await isPathDirectory(pagePath);

  if (isDirectory) {
    const files = fs
      .readdirSync(pagePath, {
        withFileTypes: true,
      })
      .map((dirent) => (dirent.isFile() ? dirent.name : null))
      .filter((dirent) => dirent !== null);

    const topics = fs
      .readdirSync(pagePath, {
        withFileTypes: true,
      })
      .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
      .filter((dirent) => dirent !== null)
      .map((topic) => ({
        name: topic?.replace(/-/g, " "),
        path: `${pagePath.replace("./posts", "/notes")}/${topic}`,
      }));

    const notes = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        `${pagePath}/${filename!}`,
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      frontmatter.date = new Date(frontmatter.date);

      return {
        // !! Fix this conditional
        // !! There is still "//" in the path for NotesPage
        path: `${
          pagePath === "./posts"
            ? pagePath.replace("./posts", "")
            : pagePath.replace("./posts/", "")
        }/${filename!.replace(".md", "")}`,
        frontmatter,
      };
    });

    return {
      topics: topics,
      notes: JSON.parse(JSON.stringify(notes)),
    };
  } else {
    const markdownWithMeta = fs.readFileSync(`${pagePath}.md`, "utf-8");

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const note = {
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      content,
    };

    return {
      note,
    };
  }
};

const getNoteFile = async (pagePath: string) => {
  const markdownWithMeta = fs.readFileSync(`${pagePath}.md`, "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const note = {
    frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    content,
  };

  return {
    note,
  };
};

export { getNotes, getNoteDirectory, getNoteFile };
