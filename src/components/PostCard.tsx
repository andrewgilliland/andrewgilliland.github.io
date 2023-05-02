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
    <div className={`border-2 border-pink-300 p-2 ${index && "mt-4"}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-50">{frontmatter.title}</h3>
          <p>{frontmatter.date}</p>
        </div>
        <Link href={`/blog/${slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
