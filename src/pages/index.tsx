import fs from "fs";
import matter from "gray-matter";
import path from "path";

import PrimaryButton from "@/components/PrimaryButton";
import { Post } from "@/types";
import { FolderIcon } from "@heroicons/react/24/outline";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import ColorDivider from "@/components/ColorDivider";

type HomeProps = {
  posts: Post[];
};

// https://howdy.com/
// https://gumroad.com/
// https://salehmubashar.com/

export default function HomePage({ posts }: HomeProps) {
  return (
    <div className="relative">
      <div>
        <section className="flex flex-col border-b-2 border-white md:flex-row">
          <div className="flex-1 bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
            <div className="max-w-xl mx-auto">
              <h1 className="font-bold text-white text-6xl stroke-black">
                Howdy, I&apos;m Andrew!
              </h1>
              <p className="text-black text-xl mt-12">
                I&apos;m a Community taught Full Stack Mobile and Web Developer.
                This site is to share what I am learning and hopefully help
                others along the way.
              </p>
              <PrimaryButton href="/notes" className="mt-12" text="Read More" />
            </div>
          </div>
          <div className="flex-1 bg-emerald-300 p-16 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-black text-2xl mt-8">
                Some topics to explore:
              </h2>
              <div className="grid gap-4 mt-6 w-60">
                {[
                  {
                    name: "JavaScript",
                    path: "/notes/javascript",
                    color: "yellow",
                  },
                  { name: "CSS", path: "/notes/css", color: "cyan" },
                  { name: "Swift", path: "/notes/swift", color: "red" },
                ].map(({ name, path, color }, index) => {
                  return (
                    <Link key={index} href={path} className={`group relative`}>
                      <div className="absolute bg-white border-2 border-black rounded w-full h-full bottom-0" />
                      <div
                        className={`flex justify-between bg-${color}-400 border-2 border-black rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
                      >
                        <div className="font-bold text-black">{name}</div>
                        <FolderIcon className="h-6 w-6 stroke-black fill-white" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-black border-b-2 border-white p-[6.5vw]">
          <h2 className="text-center font-bold text-black text-4xl stroke-white">
            Recent Notes
          </h2>

          <div className="bg-yellow-300 w-full md:w-1/2 mt-16 border-2 border-white rounded p-6">
            {posts.map((post, index) => (
              <div key={index} className={`${index && "mt-4"}`}>
                <BlogCard post={post} index={index} />
              </div>
            ))}
          </div>
        </section>
        <ColorDivider className="w-full h-6" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // const files = fs.readdirSync(path.join("posts"));
  // const posts = files.map((filename) => {
  //   const markdownWithMeta = fs.readFileSync(
  //     path.join("posts", filename),
  //     "utf-8"
  //   );
  //   const { data: frontmatter } = matter(markdownWithMeta);
  //   frontmatter.date = new Date(frontmatter.date);

  //   return {
  //     slug: filename.replace(".md", ""),
  //     frontmatter,
  //   };
  // });

  // posts.sort(
  //   (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  // );

  return {
    props: {
      // posts: JSON.parse(JSON.stringify(posts)),
      posts: [],
    },
  };
}
