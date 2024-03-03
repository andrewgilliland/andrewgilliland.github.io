import fs from "fs";
import matter from "gray-matter";
import path from "path";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";

type HomeProps = {
  posts: Post[];
  directories: string[];
};

const Blog = ({ posts, directories }: HomeProps) => {
  console.log("directories: ", directories);

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
  const directories = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  const files = fs
    .readdirSync("./posts", { withFileTypes: true })
    .map((dirent) => (dirent.isFile() ? dirent.name : null))
    .filter((dirent) => dirent !== null);

  // Todo: Get five most recent posts based on stats.mtime
  // fs.stat(filePath, (err, stats) => {
  //   if (err) {
  //     console.error('An error occurred:', err);
  //   } else {
  //     console.log('File last modified time:', stats.mtime);
  //   }
  // });

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
      directories: JSON.parse(JSON.stringify(directories)),
    },
  };
}

export default Blog;
