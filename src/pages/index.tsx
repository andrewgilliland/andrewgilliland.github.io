import fs from "fs";
import matter from "gray-matter";
import path from "path";

import PrimaryButton from "@/components/PrimaryButton";
// import { Post } from "@/types";
import BlogCard from "@/components/BlogCard";
import ColorDivider from "@/components/ColorDivider";
import TopicCard from "@/components/TopicCard";
import Link from "next/link";

type HomeProps = {
  // posts: Post[];
  notes: string[];
};

// https://howdy.com/
// https://gumroad.com/
// https://salehmubashar.com/

export default function HomePage({ notes }: HomeProps) {
  const topics = [
    {
      name: "JavaScript",
      path: "/notes/javascript",
      color: "yellow",
    },
    { name: "CSS", path: "/notes/css", color: "cyan" },
    { name: "Swift", path: "/notes/swift", color: "red" },
  ];

  return (
    <div className="relative">
      <div>
        <section className="flex flex-col border-b-2 border-white md:flex-row">
          <div className="flex-1 bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
            <div className="max-w-xl mx-auto">
              <h1 className="font-bold text-white text-4xl md:text-6xl stroke-black">
                Howdy, I&apos;m Andrew!
              </h1>
              <p className="text-black text-xl mt-8 md:mt-12">
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
                {topics.map((topic, index) => {
                  return (
                    <TopicCard topic={topic} key={index} />
                    // <Link key={index} href={path} className={`group relative`}>
                    //   <div className="absolute bg-white border-2 border-black rounded w-full h-full bottom-0" />
                    //   <div
                    //     className={`flex justify-between bg-${color}-400 border-2 border-black rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
                    //   >
                    //     <div className="font-bold text-black">{name}</div>
                    //     <FolderIcon className="h-6 w-6 stroke-black fill-white" />
                    //   </div>
                    // </Link>
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
            <div className="flex flex-col">
              {notes.map((post, index) => (
                <Link
                  key={index}
                  className={`${index && "mt-4"} font-bold text-black`}
                  href={`${post}`}
                >{`Note ${index + 1}`}</Link>
              ))}
            </div>
          </div>
        </section>
        <ColorDivider className="w-full h-6" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  function getFiles(rootDirectory: string) {
    let entries = fs.readdirSync(rootDirectory, { withFileTypes: true });

    let files = entries
      .filter((entry) => !entry.isDirectory())
      .map((entry) => path.join(rootDirectory, entry.name))
      .map((entry) => entry.replace("post", "note").replace(/\.md$/, "")); // maps to an array of file paths

    let directories = entries.filter((entry) => entry.isDirectory());

    for (let directory of directories) {
      let subdirPaths = getFiles(path.join(`${rootDirectory}`, directory.name));

      files = files.concat(subdirPaths); // adds the file paths from the subdirectories
    }

    return files;
    // return
    // {
    //  path: notes/javascript/d3/create-a-map-with-d3
    //  frontmatter: { date, title, excerpt }
    // }
  }

  let filePaths = getFiles("./posts");

  console.log("filePaths", filePaths);

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
      notes: filePaths,
    },
  };
}
