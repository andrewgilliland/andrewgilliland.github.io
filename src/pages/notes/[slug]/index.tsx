import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Route from "@/components/Route";
import { RoutePageProps } from "@/types";

export async function getStaticPaths() {
  // Options can be either a directory or a file
  const options = fs.readdirSync(path.join("posts"));

  const paths = options.map((option) => ({
    params: {
      slug: option.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  const isNote = files.includes(`${slug}.md`);

  if (isNote) {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", `${slug}.md`),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    const note = {
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      content,
    };

    return {
      props: {
        note,
      },
    };
  } else {
    const topics = fs
      .readdirSync(`./posts/${slug}`, { withFileTypes: true })
      .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
      .filter((dirent) => dirent !== null)
      .map((topic) => ({
        name: topic.replace(/-/g, " "),
        path: `/notes/${slug}/${topic}`,
      }));

    const files = fs
      .readdirSync(`./posts/${slug}`, { withFileTypes: true })
      .map((dirent) => (dirent.isFile() ? dirent.name : null))
      .filter((dirent) => dirent !== null);

    const notes = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join(`posts/${slug}`, filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      frontmatter.date = new Date(frontmatter.date);

      return {
        path: `${slug}/${filename.replace(".md", "")}`,
        frontmatter,
      };
    });

    return {
      props: {
        topic: slug,
        topics: topics,
        notes: JSON.parse(JSON.stringify(notes)),
      },
    };
  }
}

const NotesRouteOnePage: FC<RoutePageProps> = (props) => <Route {...props} />;

export default NotesRouteOnePage;
