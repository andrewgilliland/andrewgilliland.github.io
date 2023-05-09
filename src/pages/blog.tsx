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
    <div className={``}>
      <div className="w-full">
        <h1 className="text-gray-100 text-4xl">Blog</h1>

        <section className="mx-10 mt-10">
          <div className="grid grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
        </section>
      </div>
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
