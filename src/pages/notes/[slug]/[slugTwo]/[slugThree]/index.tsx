import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NoteRoute from "@/components/NoteRoute";
import { RoutePageProps } from "@/types";

export async function getStaticPaths() {
  const directoriesOne = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  const paths = directoriesOne.flatMap((directoryOne) => {
    const directoriesTwo = fs
      .readdirSync(`./posts/${directoryOne}`, { withFileTypes: true })
      .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
      .filter((dirent) => dirent !== null);

    return directoriesTwo.flatMap((directoryTwo) => {
      const files = fs.readdirSync(
        path.join("posts", directoryOne, directoryTwo)
      );
      return files.map((filename) => ({
        params: {
          slug: directoryOne,
          slugTwo: directoryTwo,
          slugThree: filename.replace(".md", ""),
        },
      }));
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug, slugTwo, slugThree } }) {
  const files = fs
    .readdirSync(`./posts/${slug}/${slugTwo}`, { withFileTypes: true })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  const isNote = files.includes(`${slugThree}.md`);

  if (isNote) {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", slug, slugTwo, `${slugThree}.md`),
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
    return {
      props: {
        topics: [],
        notes: JSON.parse(JSON.stringify([])),
      },
    };
  }
}

const NotesRouteThreePage: FC<RoutePageProps> = (props) => (
  <NoteRoute {...props} />
);

export default NotesRouteThreePage;
