"use server";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { marked } from "marked";

import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeShiki from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { Value } from "unified/lib";

type TransformMarkdownFileResult = {
  frontmatter: Record<string, string>;
  html: string;
};

/* Separates frontmatter and content from markdownfile, then transforms content to html */
const transformMarkdownFile = async (
  fileName: string
): Promise<TransformMarkdownFileResult> => {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", fileName),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    const html = marked(content);

    return {
      frontmatter,
      html,
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`File not found: ${fileName}`);
    } else {
      throw new Error(`Error reading file: ${fileName}`);
    }
  }
};

// ! Type this and make it generic
const transformMarkdown = async (
  pagePath: string
): Promise<TransformMarkdownFileResult> => {
  const markdownFilePath = `${decodeURIComponent(pagePath)}.md`;

  try {
    // ! path.join(process.cwd(), `${decodeURIComponent(pagePath)}.md`) is needed to access the correct file path
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), markdownFilePath),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    // const html = marked(content);

    // ! This is needed for code syntax highlighting
    // ! This allows for line highlighting but also requires a '.hightlighted' class to be in the index.css
    const file = await unified()
      .use(remarkParse) // Parse markdown
      .use(remarkRehype, { allowDangerousHtml: true }) // Turn markdown into HTML, and allow raw HTML
      .use(rehypeShiki, {
        theme: "synthwave-84",
        transformers: [transformerMetaHighlight()],
      }) // Syntax highlighting
      .use(rehypeStringify, { allowDangerousHtml: true }) // Turn HTML into string
      .process(content);

    const html = file.value as string;

    return {
      frontmatter,
      html,
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`File not found: ${markdownFilePath}`);
    } else {
      throw new Error(`Error reading file: ${markdownFilePath}`);
    }
  }
};

export { transformMarkdownFile, transformMarkdown };
