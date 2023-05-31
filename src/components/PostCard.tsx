import Link from "next/link";
import { Post } from "../../types";
import {
  XMarkIcon,
  MinusSmallIcon,
  ChevronUpDownIcon,
  UserIcon,
  BeakerIcon,
  BoltIcon,
  FireIcon,
} from "@heroicons/react/20/solid";

type PostCardProps = {
  post: Post;
  index: number;
};

const PostCard = ({ post, index }: PostCardProps) => {
  const { slug, frontmatter } = post;

  return (
    <Link href={`/blog/${slug}`} className="group relative">
      <div className="absolute bg-black border-2 border-white rounded w-full h-full bottom-0"></div>
      <div
        className={`bg-black border-2 border-white rounded transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
      >
        <div className="flex flex-wrap border-b-2 border-white w-full h-48">
          {[
            { color: "pink" },
            { color: "cyan" },
            { color: "emerald" },
            { color: "yellow" },
          ].map(({ color }) => (
            <div
              className={`flex justify-center items-center bg-${color}-300 h-1/2 w-1/2`}
            >
              <FireIcon className={`text-${color}-200 h-12 w-12`} />
            </div>
          ))}
        </div>
        <div className="mt-6 px-4 pb-4">
          <div>
            <p>{frontmatter.date}</p>
            <h3 className="text-gray-50">{frontmatter.title}</h3>
            <p>{frontmatter.excerpt}</p>
          </div>
          <div>Read More</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
