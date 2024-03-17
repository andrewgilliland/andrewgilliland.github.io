import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { RoutePageProps } from "@/types";
import Route from "@/components/Route";

export async function getStaticPaths() {
  const folders = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  const paths = folders.flatMap((folder) => {
    const files = fs.readdirSync(path.join("posts", folder));
    return files.map((filename) => ({
      params: {
        slug: folder,
        slugTwo: filename.replace(".md", ""),
      },
    }));
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug, slugTwo } }) {
  const files = fs
    .readdirSync(`./posts/${slug}`, { withFileTypes: true })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  const isNote = files.includes(`${slugTwo}.md`);

  if (isNote) {
    console.log("isNote: ", isNote);

    // Todo: Implement getStaticProps for note

    return {
      props: {
        topics: [],
        notes: JSON.parse(JSON.stringify([])),
      },
    };
  } else {
    const files = fs
      .readdirSync(`./posts/${slug}/${slugTwo}`, { withFileTypes: true })
      .map((dirent) => (dirent.isFile() ? dirent.name : null))
      .filter((dirent) => dirent !== null);

    const notes = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join(`posts/${slug}/${slugTwo}`, filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      frontmatter.date = new Date(frontmatter.date);

      return {
        path: `${slug}/${slugTwo}/${filename.replace(".md", "")}`,
        frontmatter,
      };
    });

    return {
      props: {
        topic: slugTwo,
        topics: [],
        notes: JSON.parse(JSON.stringify(notes)),
      },
    };
  }
}

const RouteTwoPage: FC<RoutePageProps> = (props) => <Route {...props} />;

export default RouteTwoPage;
