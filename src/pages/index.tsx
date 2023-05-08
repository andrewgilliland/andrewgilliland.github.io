import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import PostCard from "@/components/PostCard";
import PrimaryButton from "@/components/PrimaryButton";
import { Post } from "../../types";

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div className="">
      <div>
        <section className="flex flex-col border-b-2 border-white">
          <div className="flex-1 bg-pink-400 border-b-2 md:border-r-2 border-white p-16">
            <h1 className="text-gray-900 text-4xl">Home</h1>
            <p className="text-gray-900 text-xl mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              libero rerum, magnam quasi autem aliquam dolorem temporibus
              consectetur maiores vel.
            </p>

            <PrimaryButton href="/blog" className="mt-12" text="Click me" />
          </div>
          <div className="flex-1 bg-yellow-400 p-16 justify-center align-center">
            <div className="relative">
              <div className="absolute bg-black h-64 w-64 rounded-full left-1 bottom-1"></div>
              <div className="bg-white h-64 w-64 rounded-full"></div>
            </div>
            <p className="text-gray-900 text-xl mt-8">Some text about stuff</p>
          </div>
        </section>
        <section className="bg-cyan-400 border-b-2">
          <h2 className="text-gray-900 text-2xl py-24 px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta
            velit.
          </h2>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  // Sort posts by date

  return {
    props: {
      posts,
    },
  };
}
