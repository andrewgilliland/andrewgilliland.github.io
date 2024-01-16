import fs from "fs";
import matter from "gray-matter";
import path from "path";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";

type HomeProps = {
  posts: Post[];
};

const Blog = ({ posts }: HomeProps) => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
      <h1 className="font-bold text-gray-100 text-4xl stroke-white mx-8 md:mx-0">
        Blog
      </h1>
      <section className="mt-10 mx-8 md:mx-0 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
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
    },
  };
}

export default Blog;
