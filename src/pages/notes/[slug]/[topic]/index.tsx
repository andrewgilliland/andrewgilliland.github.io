import fs from "fs";
import path from "path";

import { Note, Topic } from "@/types";

type RoutePageProps = {
  topics?: Topic[];
  notes?: Note[];
  note?: Note;
};

const TopicPage = () => {
  return (
    <div>
      <div>
        <h2>Hola</h2>
      </div>
    </div>
  );
};

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
        topic: filename.replace(".md", ""),
      },
    }));
  });

  // console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug, topic } }) {
  console.log("path: ", `${slug}/${topic}`);

  const files = fs
    .readdirSync(`./posts/${slug}`, { withFileTypes: true })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  console.log("topic: ", topic);

  const isNote = files.includes(`${topic}.md`);

  if (isNote) {
    console.log("files: ", files);
  } else {
    console.log("folder: --------------------");
  }

  return {
    props: {
      topics: [],
      notes: JSON.parse(JSON.stringify([])),
    },
  };
}

export default TopicPage;
