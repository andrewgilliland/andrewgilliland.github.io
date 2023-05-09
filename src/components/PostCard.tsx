// import React from 'react'

import Link from "next/link";
import { Post } from "../../types";

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
        <div className="bg-cyan-400 border-b-2 border-white w-full h-48" />
        <div className="mt-6 px-4 pb-4">
          <div>
            <p>{frontmatter.date}</p>
            <h3 className="text-gray-50">{frontmatter.title}</h3>
            <p>{}</p>
          </div>
          <div>Read More</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
