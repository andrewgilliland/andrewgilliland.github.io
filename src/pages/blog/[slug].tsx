import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
// import BlogOutlineCard from "@/components/BlogOutlineCard";
import { HeadingElement } from "../../types";
import ColorDivider from "@/components/ColorDivider";

const PostPage = ({ frontmatter: { title, excerpt, date }, slug, content }) => {
  const [headingElements, setHeadingElements] = useState<HeadingElement[]>([]);
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const childElements = document.querySelector(".prose").children;
    const elements = [];

    for (const element of childElements) {
      const typedElement = element as HTMLElement;
      if (typedElement.id) {
        elements.push({
          id: typedElement.id,
          text: typedElement.textContent,
          tag: typedElement.tagName,
        });
      }
    }

    setHeadingElements(elements);
  }, []);

  return (
    <div className=" px-4 md:w-[40em] mx-auto mt-12">
      <div className="">
        <Link
          className="flex items-center text-gray-400 hover:text-gray-200 w-fit hover:scale-105 transition-all"
          href="/blog"
        >
          <ArrowLeftCircleIcon className="h-6 w-6" />
          <div className="ml-1">Go Back</div>
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-8">{title}</h1>
        <div className="text-gray-200 text-xl mt-2">{excerpt}</div>
        <div className="text-sm text-gray-400 mt-2">
          Last Updated: {formattedDate}
        </div>
        <ColorDivider />
      </div>

      <div
        className="prose prose-h2:text-yellow-300 prose-h3:text-gray-300 prose-h4:text-gray-300 prose-h4:ml-4 prose-h5:text-gray-500 prose-p:text-gray-200 prose-ul:text-gray-200 prose-pre:border-2 prose-pre:border-gray-400 prose-code:bg-gray-800 prose-code:text-white prose-a:text-cyan-300 prose-a:no-underline prose-a:font-semibold mt-16 max-w-2xl"
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
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      slug,
      content,
    },
  };
}

export default PostPage;
