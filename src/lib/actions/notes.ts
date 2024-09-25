"use server";
import { Note, NoteFrontmatter, Topic } from "@/types";
import fs from "fs";
import matter from "gray-matter";

import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import { getFilesPaths } from "../utils/fs";

const getNotes = async (): Promise<{ notes: Partial<Note>[] }> => {
  let filePaths = await getFilesPaths("./content/notes");

  const notes = filePaths.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(markdownWithMeta);
    const frontmatter = data as NoteFrontmatter;

    frontmatter.date = new Date(frontmatter.date);

    const note = {
      path: filePath.replace("content/notes/", "").replace(".md", ""),
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
    path: `${pagePath.replace("/content/notes", "/notes")}/${topic}`,
  }));

  const notes = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      `${pagePath}/${filename!}`,
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    const frontmatter = data as NoteFrontmatter;

    return {
      path: `${pagePath.replace("/content/notes", "")}/${filename.replace(
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

// ! Should be in markdown.ts
// ! rename to transformMarkdownFile
// ! Type this and make it generic
const transformMarkdownFile = async (pagePath: string) => {
  const markdownWithMeta = fs.readFileSync(
    `${decodeURIComponent(pagePath)}.md`,
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  // ! This is needed for code syntax highlighting
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
      theme: "synthwave-84",
    })
    .use(rehypeStringify)
    .process(content);

  const html = file.value;

  return {
    frontmatter,
    html,
  };
};

export { getNotes, getNoteDirectory, transformMarkdownFile };
