"use server";
import { Note, NoteFrontmatter, Topic } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import { getFilesPaths } from "../utils/fs";
import { parentPath } from "../constants";

const getNotes = async (): Promise<{ notes: Partial<Note>[] }> => {
  let filePaths = await getFilesPaths(parentPath);

  const notes = filePaths.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(markdownWithMeta);
    const frontmatter = data as NoteFrontmatter;

    frontmatter.date = new Date(frontmatter.date);

    const note = {
      path: filePath.replace("markdown/notes/", "").replace(".md", ""),
      frontmatter,
    };

    return note;
  });

  notes.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  );

  return {
    notes,
  };
};

const getNoteDirectory = async (
  pagePath: string
): Promise<{ topics: Topic[]; notes: Partial<Note>[] }> => {
  const decodedPath = decodeURIComponent(pagePath);

  const files = fs
    .readdirSync(decodedPath, {
      withFileTypes: true,
    })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null) as string[];

  const topics = (
    fs
      .readdirSync(decodedPath, {
        withFileTypes: true,
      })
      .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
      .filter((dirent) => dirent !== null) as string[]
  ).map((topic) => ({
    name: topic?.replace(/-/g, " "),
    path: `${decodedPath.replace("/src/markdown/notes", "/notes")}/${topic}`,
  }));

  const notes = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      `${decodedPath}/${filename!}`,
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    const frontmatter = data as NoteFrontmatter;

    return {
      path: `${pagePath.replace("/src/markdown/notes", "")}/${filename.replace(
        ".md",
        ""
      )}`,
      frontmatter,
    };
  });

  return {
    topics,
    notes,
  };
};

export { getNotes, getNoteDirectory };
