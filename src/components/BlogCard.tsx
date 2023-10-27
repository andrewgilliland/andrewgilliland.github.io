import { Frontmatter } from "../../types";
import CodeBlock from "./CodeBlock";

type BlogCardProps = {
  frontmatter: Frontmatter;
  index: number;
};

const BlogCard = ({ frontmatter, index }: BlogCardProps) => {
  const { title, date, excerpt, draft } = frontmatter;

  return (
    <div
      className={`flex flex-col md:flex-row border-2 border-white bg-black rounded p-4 ${
        index && "mt-4"
      } transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
    >
      <CodeBlock />
      <div className="mt-4 md:mt-0 md:ml-8">
        <div className="font-semibold">{title}</div>
        <div className="text-gray-400">{date}</div>
        <div className="text-sm">{excerpt}</div>
      </div>
    </div>
  );
};

export default BlogCard;
