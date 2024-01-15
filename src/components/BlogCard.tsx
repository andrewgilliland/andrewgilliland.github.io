import Link from "next/link";
import { Post } from "../types";
import CodeBlock from "./CodeBlock";

type BlogCardProps = {
  post: Post;
  index: number;
};

const BlogCard = ({ post, index }: BlogCardProps) => {
  const { slug, frontmatter } = post;
  const { title, date, excerpt, draft } = frontmatter;

  return (
    <Link href={`/blog/${slug}`} className={`group relative`}>
      <div className="absolute bg-black border-2 border-white rounded w-full h-full bottom-0" />
      <div
        className={`flex flex-col lg:flex-row border-2 border-white bg-black rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
      >
        <div className="flex justify-center">
          <CodeBlock />
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-8">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400">{date}</div>
          <div className="text-sm">{excerpt}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
