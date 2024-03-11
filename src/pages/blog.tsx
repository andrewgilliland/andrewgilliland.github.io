import fs from "fs";
import matter from "gray-matter";
import path from "path";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";
import TopicCard from "@/components/TopicCard";
import { FC } from "react";

type BlogPageProps = {
  posts: Post[];
  mostRecentPosts?: { name: string; lastUpdated: Date }[];
  topics: string[];
};

const BlogPage: FC<BlogPageProps> = ({ posts, topics }) => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
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
      <section className="mt-10 mx-8 md:mx-0 mb-24">
        <h2 className="font-bold text-gray-100 text-4xl stroke-white mx-8 md:mx-0">
          Recent Notes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  console.log("Blog GetStaticProps: ");

  const directories = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

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

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    frontmatter.date = new Date(frontmatter.date);

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  posts.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  );

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      mostRecentPosts: JSON.parse(JSON.stringify(mostRecentPosts)),
      topics: JSON.parse(JSON.stringify(directories)),
    },
  };
}

export default BlogPage;
