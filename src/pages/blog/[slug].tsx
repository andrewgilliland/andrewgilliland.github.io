import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";

const PostPage = ({ frontmatter: { title, date }, slug, content }) => {
  console.log(content);

  return (
    <div className="">
      <Link href="/">Go Back</Link>
      <div className="mt-12">
        <h1 className="text-3xl">{title}</h1>
        <div className="text-sm text-gray-400 mt-2">{date}</div>
      </div>

      <div
        className="mt-16 post"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default PostPage;
