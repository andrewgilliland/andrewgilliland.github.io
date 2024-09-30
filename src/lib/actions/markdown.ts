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
// import { serialize } from "next-mdx-remote/serialize";

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
const transformMarkdownFile = async (pagePath: string) => {
  const markdownWithMeta = fs.readFileSync(
    `${decodeURIComponent(pagePath)}.mdx`,
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

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

  // console.log("markdownWithMeta: ", markdownWithMeta);

  // const serialized = await serialize(file.value);
  // console.log("serialized: ", serialized);

  // console.log("file.value: ", file.value);

  return {
    frontmatter,
    html: file.value,
    source: markdownWithMeta,
  };
};

export { parseMarkDownFile, transformMarkdownFile };
