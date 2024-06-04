import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getContent = async ({ fileName }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", `${fileName}`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const note = {
    frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    content,
  };

  return {
    note,
  };
};

export { getContent as getResume };
