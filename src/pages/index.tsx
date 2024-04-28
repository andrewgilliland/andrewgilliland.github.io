import fs from "fs";
import matter from "gray-matter";
import path from "path";

import PrimaryButton from "@/components/PrimaryButton";
import ColorDivider from "@/components/ColorDivider";
import TopicCard from "@/components/TopicCard";
import Link from "next/link";
import { Note } from "@/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlackMage from "@/components/svg/BlackMage";
import RedMage from "@/components/svg/RedMage";

type HomeProps = {
  notes: Note[];
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

  const [currentValue, setCurrentValue] = useState("front");
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    const values = ["front", "back", "side"];
    const colors = ["red", "green", "blue"];
    const interval = setInterval(() => {
      const index = (values.indexOf(currentValue) + 1) % values.length;
      const colorIndex = (colors.indexOf(color) + 1) % colors.length;

      setCurrentValue(values[index]);
      setColor(colors[colorIndex]);
    }, 700);

    return () => clearInterval(interval); // This is important to clear the interval when the component unmounts
  }, [currentValue, color]);

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
              <div className="flex items-center gap-4">
                <RedMage className="scale-x-[-1]" />
                <h2 className="font-bold text-black text-2xl">
                  Some topics to explore:
                </h2>
                <BlackMage color={color} />
              </div>
              <div className="grid gap-4 mt-6 w-60">
                {topics.map((topic, index) => (
                  <TopicCard topic={topic} key={index} />
                ))}
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
              {notes.map(({ path, frontmatter: { title } }, index) => (
                <Link
                  key={index}
                  className={`${index && "mt-4"} group relative`}
                  href={path}
                  title={title}
                >
                  <div
                    className={`absolute bg-white border-2 border-black rounded w-full h-full bottom-0`}
                  />
                  <div className="flex justify-between items-center bg-black border-2 border-black rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <h4 className="font-bold text-white truncate max-w-[75%]">
                      {title}
                    </h4>
                    <PencilSquareIcon className="h-6 w-6 stroke-white min-w-max" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 gap-10">
            <Image
              className="animate-bounce"
              src={`/moogle-front-1.png`}
              width={50}
              height={50}
              alt="Moogle"
            />
            <Image
              className="animate-bounce"
              src="/moogle-back-1.png"
              width={50}
              height={50}
              alt="Black Mage"
            />
            <Image
              className="animate-bounce"
              src="/moogle-side-1.png"
              width={50}
              height={50}
              alt="Black Mage"
            />
          </div>
        </section>

        <ColorDivider className="w-full h-6" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  function getFilesPaths(rootDirectory: string) {
    let entries = fs.readdirSync(rootDirectory, { withFileTypes: true });

    let files = entries
      .filter((entry) => !entry.isDirectory())
      .map((entry) => path.join(rootDirectory, entry.name)); // maps to an array of file paths

    let directories = entries.filter((entry) => entry.isDirectory());

    for (let directory of directories) {
      let subdirPaths = getFilesPaths(
        path.join(`${rootDirectory}`, directory.name)
      );

      files = files.concat(subdirPaths); // adds the file paths from the subdirectories
    }

    return files;
  }

  let filePaths = getFilesPaths("./posts");

  const notes = filePaths.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    frontmatter.date = new Date(frontmatter.date);

    const note = {
      path: filePath.replace(/\.md$/, "").replace(/^posts\//, "notes/"),
      frontmatter,
    };

    return note;
  });

  // posts.sort(
  //   (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  // );

  return {
    props: {
      // posts: JSON.parse(JSON.stringify(posts)),
      posts: [],
      notes: JSON.parse(JSON.stringify(notes)),
    },
  };
}
