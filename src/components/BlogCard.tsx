import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { Note } from "@/types";

type BlogCardProps = {
  slug: string;
  note: Note;
  index: number;
};

const BlogCard = ({ slug, note, index }: BlogCardProps) => {
  const {
    frontmatter: { title, date, excerpt },
  } = note;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <div className="text-gray-400">{formattedDate}</div>
          <div className="text-sm">{excerpt}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
