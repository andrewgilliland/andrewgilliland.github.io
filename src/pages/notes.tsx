import fs from "fs";
import matter from "gray-matter";
import path from "path";
import NoteCard from "@/components/NoteCard";
import { Note, Topic } from "@/types";
import TopicCard from "@/components/TopicCard";
import { FC } from "react";

type NotesPageProps = {
  notes: Note[];
  topics: Topic[];
  mostRecentPosts?: { name: string; lastUpdated: Date }[];
};

const NotesPage: FC<NotesPageProps> = ({ notes, topics }) => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
      {topics.length > 0 && (
        <section className="mt-10 mx-8 md:mx-0 mb-24">
          <h2 className="font-bold text-gray-100 text-4xl stroke-white mx-8 md:mx-0">
            Topics
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {topics.map((topic, index) => (
              <TopicCard key={index} topic={topic} />
            ))}
          </div>
        </section>
      )}
      {notes.length > 0 && (
        <section className="mt-10 mx-8 md:mx-0 mb-24">
          <h2 className="font-bold text-gray-100 text-4xl stroke-white mx-8 md:mx-0">
            Recent Notes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {notes.map((note, index) => (
              <NoteCard key={index} note={note} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const topics = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
    .filter((dirent) => dirent !== null)
    .map((topic) => ({
      name: topic,
      path: `/notes/${topic}`,
    }));

  const files = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  // Todo: Get five most recent posts based on stats.mtime (last updated date)
  // 1. Get all files in the posts directory (including subdirectories)
  // 2. Get the url path for each file
  // 3. Sort by stats.mtime

  const mostRecentPosts = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) =>
      dirent.isFile()
        ? {
            name: dirent.name,
            lastUpdated: fs.statSync(path.join("./posts", dirent.name)).mtime,
          }
        : null
    )
    .filter((file) => file !== null)
    .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())
    .slice(0, 5);

  const notes = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    frontmatter.date = new Date(frontmatter.date);

    return {
      path: filename.replace(".md", ""),
      frontmatter,
    };
  });

  notes.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  );

  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes)),
      topics: topics,
      mostRecentPosts: JSON.parse(JSON.stringify(mostRecentPosts)),
    },
  };
}

export default NotesPage;