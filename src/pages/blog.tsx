import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import PostCard from "@/components/PostCard";
import { Post } from "../../types";

type HomeProps = {
  posts: Post[];
};

const Blog = ({ posts }: HomeProps) => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
      <h1 className="font-bold text-gray-100 text-4xl stroke-white">Blog</h1>
      <section className="mt-10">
        <div className="grid grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  // Sort posts by date

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
