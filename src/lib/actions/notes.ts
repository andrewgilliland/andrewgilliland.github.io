"use server";
import { Note, NoteFrontmatter, Topic } from "@/types";
import fs from "fs";
import matter from "gray-matter";
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

  // * Sort notes by date ???
  notes.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  );

  notes.map((note) => {
    console.log("note: ", note);
  });

  return {
    notes: notes,
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
    path: `${pagePath.replace("/content/notes", "")}/${topic}`,
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
