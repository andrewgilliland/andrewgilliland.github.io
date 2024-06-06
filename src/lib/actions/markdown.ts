"use server";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const parseMarkDownFile = async ({ fileName }) => {
  // Get the markdown file from content directory
  const markdownWithMeta = fs.readFileSync(
    path.join("content", `${fileName}`),
    "utf-8"
  );

  // Parse frontmatter & content from markdown
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    content,
  };
};

export { parseMarkDownFile };
