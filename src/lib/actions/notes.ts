"use server";
import { Note } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import { getFilesPaths } from "../utils/fs";

const getNotes = async (): Promise<{ notes: Note[] }> => {
  let filePaths = await getFilesPaths("./content/notes");

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

  // * Sort notes by date ???
  // posts.sort(
  //   (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  // );

  return {
    notes: notes,
  };
};

const getNoteDirectory = async (pagePath: string) => {
  console.log("getNoteDirectory pagePath: ", pagePath);

  const files = fs
    .readdirSync(pagePath, {
      withFileTypes: true,
    })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null) as string[];

  const topics = (
    fs
      .readdirSync(pagePath, {
        withFileTypes: true,
      })
      .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
      .filter((dirent) => dirent !== null) as string[]
  ).map((topic) => ({
    name: topic?.replace(/-/g, " "),
    path: `${pagePath.replace("/content/notes", "")}/${topic}`,
  }));

  const notes = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      `${pagePath}/${filename!}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    frontmatter.date = new Date(frontmatter.date);

    return {
      path: `${pagePath.replace("/content/notes", "")}/${filename.replace(
        ".md",
        ""
      )}`,
      frontmatter,
    };
  });

  return {
    topics: topics,
    notes: notes,
  };
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
