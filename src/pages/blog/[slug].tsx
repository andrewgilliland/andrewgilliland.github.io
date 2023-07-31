import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import colors from "tailwindcss/colors";

const PostPage = ({ frontmatter: { title, excerpt, date }, slug, content }) => {
  const pink300 = colors.pink["300"];
  const emerald300 = colors.emerald["300"];
  const cyan300 = colors.cyan["300"];
  const yellow300 = colors.yellow["300"];

  return (
    <div className=" px-4 md:w-[40em] mx-auto mt-12">
      <div className="">
        <Link
          className="flex items-center text-gray-400 hover:text-gray-200 w-fit"
          href="/blog"
        >
          <ArrowLeftCircleIcon className="h-6 w-6 " />
          <div className="ml-1">Go Back</div>
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-8">{title}</h1>
        <div className="text-gray-200 text-xl mt-2">{excerpt}</div>
        <div className="text-sm text-gray-400 mt-2">Last Updated: {date}</div>
        <div
          className="w-full h-2 rounded-full mt-8"
          style={{
            backgroundImage: `linear-gradient( -10deg, ${pink300}, ${pink300} 30%, ${emerald300} 30%, ${emerald300} 50%, ${yellow300} 50%, ${yellow300} 70%, ${cyan300} 70%, ${cyan300})`,
          }}
        />
      </div>

      <div
        className="mt-16 post max-w-2xl"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
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
