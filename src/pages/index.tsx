import fs from "fs";
import matter from "gray-matter";
import path from "path";

import PrimaryButton from "@/components/PrimaryButton";
import BrowswerWindow from "@/components/BrowserWindow";
import { Post } from "../../types";

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div className="">
      <div>
        <section className="flex flex-col border-b-2 border-white md:flex-row">
          <div className="flex-1 bg-pink-300 border-b-2 md:border-r-2 border-white p-16">
            <h1 className="text-gray-900 text-4xl">Home</h1>
            <p className="text-gray-900 text-xl mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              libero rerum, magnam quasi autem aliquam dolorem temporibus
              consectetur maiores vel.
            </p>

            <PrimaryButton href="/blog" className="mt-12" text="Click me" />
          </div>
          <div className="flex-1 bg-yellow-300 p-16 flex flex-col justify-center items-center">
            <div className="relative">
              <div className="absolute bg-white h-64 w-64 rounded-full right-1 bottom-1"></div>
              <div className="bg-black h-64 w-64 rounded-full"></div>
            </div>
            <p className="text-gray-900 text-xl mt-8">Some text about stuff</p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-cyan-300 border-b-2 p-16">
          <h2 className="text-gray-900 text-2xl py-24 px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta
            velit.
          </h2>

          <BrowswerWindow />
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
