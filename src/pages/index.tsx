import fs from "fs";
import matter from "gray-matter";
import path from "path";

import PrimaryButton from "@/components/PrimaryButton";
import BrowswerWindow from "@/components/BrowserWindow";
import AppWindow from "@/components/AppWindow";
import { Post } from "../../types";
import Phone from "@/components/Phone";
import Blocks from "@/components/Blocks";

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div className="relative">
      <div>
        <section className="flex flex-col border-b-2 border-white md:flex-row">
          <div className="flex-1 bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
            <div className="max-w-xl mx-auto">
              <h1 className="font-bold text-gray-100 text-6xl lg:text-[5.625rem] stroke-black">
                Welcome
              </h1>
              <p className="text-gray-900 text-xl mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                libero rerum, magnam quasi autem aliquam dolorem temporibus
                consectetur maiores vel.
              </p>

              <PrimaryButton href="/blog" className="mt-12" text="Read More" />
            </div>
          </div>
          <div className="flex-1 bg-yellow-300 p-16 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Blocks />
              <p className="text-gray-900 text-xl mt-8">
                Some text about stuff
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-cyan-300 border-b-2 p-[6.5vw]">
          <h2 className="text-gray-900 text-2xl font-bold max-w-lg text-center">
            Look at this cool section heading. There's more info here!
          </h2>

          <div className="grid grid-cols-2 gap-12 max-w-3xl mt-12">
            {[
              {
                Component: Phone,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ex iste earum eos ipsam voluptates quae totam dolorem at blanditiis.",
              },
              {
                Component: BrowswerWindow,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ex iste earum eos ipsam voluptates quae totam dolorem at blanditiis.",
              },
              {
                Component: AppWindow,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ex iste earum eos ipsam voluptates quae totam dolorem at blanditiis.",
              },
            ].map(({ Component, text }, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <Component />
                  <p className="text-gray-900 mt-8">{text}</p>
                </div>
              );
            })}
          </div>
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
