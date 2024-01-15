import Link from "next/link";
import { Post } from "../types";
import { FireIcon } from "@heroicons/react/20/solid";

type PostCardProps = {
  post: Post;
  index: number;
};

const PostCard = ({ post, index }: PostCardProps) => {
  const { slug, frontmatter } = post;

  return (
    <Link href={`/blog/${slug}`} className="group relative">
      <div className="absolute bg-black border-2 border-white rounded w-full h-full bottom-0" />
      <div
        className={`bg-black border-2 border-white rounded h-full transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
      >
        <div className="flex flex-wrap border-b-2 border-white w-full h-48">
          {[
            { color: "pink" },
            { color: "cyan" },
            { color: "emerald" },
            { color: "yellow" },
          ].map(({ color }, index) => (
            <div
              key={index}
              className={`flex justify-center items-center bg-${color}-300 h-1/2 w-1/2`}
            >
              <FireIcon className={`text-${color}-200 h-12 w-12`} />
            </div>
          ))}
        </div>
        <div className="mt-6 px-4 pb-4">
          <div>
            <p className="text-gray-300 text-sm">{frontmatter.date}</p>
            <h3 className="font-semibold text-gray-100 text-lg">
              {frontmatter.title}
            </h3>
            <p className="text-gray-300 text-sm">{frontmatter.excerpt}</p>
          </div>
          <div className="text-gray-300 text-sm">Read More</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
