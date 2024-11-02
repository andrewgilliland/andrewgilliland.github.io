"use server";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeShiki from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

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

// ! Type this and make it generic
const transformMarkdown = async (pagePath: string) => {
  try {
    // ! path.join(process.cwd(), `${decodeURIComponent(pagePath)}.md`) is needed to access the correct file path
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), `${decodeURIComponent(pagePath)}.md`),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    // ! This is needed for code syntax highlighting
    // ! This allows for line highlighting but also requires a '.hightlighted' class to be in the index.css
    // const file = await unified()
    //   .use(remarkParse) // Parse markdown
    //   .use(remarkRehype, { allowDangerousHtml: true }) // Turn markdown into HTML, and allow raw HTML
    //   // .use(rehypeShiki, {
    //   //   theme: "synthwave-84",
    //   //   transformers: [transformerMetaHighlight()],
    //   // }) // Syntax highlighting
    //   .use(rehypeStringify, { allowDangerousHtml: true }) // Turn HTML into string
    //   .process(content);

    // const html = file.value;

    return {
      frontmatter,
      content,
    };
  } catch (error) {
    console.error("transformMarkdown: ", error);

    return {
      frontmatter: {},
      content: "Error parsing markdown file",
    };
  }
};

export { parseMarkDownFile, transformMarkdown };
