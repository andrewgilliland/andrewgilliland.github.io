// "use client";
import { FC, useEffect, useState } from "react";
import { marked } from "marked";
import BackButton from "../../BackButton";
import ColorDivider from "../../ColorDivider";
import { HeadingElement, Note } from "@/types";
import { useRouter } from "next/navigation";
import { getNoteFile } from "@/lib/actions/notes";
// import BlogOutlineCard from "@/components/BlogOutlineCard";

type NotePageProps = {
  pagePath: string;
};

const NotePage: FC<NotePageProps> = async ({ pagePath }) => {
  const { note } = await getNoteFile(pagePath);

  const {
    frontmatter: { title, excerpt, date },
    content,
  } = note;

  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const router = useRouter();
  // const [headingElements, setHeadingElements] = useState<HeadingElement[]>([]);

  // useEffect(() => {
  //   const childElements = document.querySelector(".prose").children;
  //   const elements = [];

  //   for (const element of childElements) {
  //     const typedElement = element as HTMLElement;
  //     if (typedElement.id) {
  //       elements.push({
  //         id: typedElement.id,
  //         text: typedElement.textContent,
  //         tag: typedElement.tagName,
  //       });
  //     }
  //   }

  //   setHeadingElements(elements);
  // }, []);

  return (
    <div className="px-[10%] md:p-0 md:w-[40em] mx-auto mt-12 min-h-screen">
      <div>
        {/* <BackButton back={router.back} /> */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-8">{title}</h1>
        <div className="text-gray-200 text-xl mt-2">{excerpt}</div>
        <div className="text-sm text-gray-400 mt-2">
          Last Updated: {formattedDate}
        </div>
        <ColorDivider />
      </div>

      <div
        className="prose prose-h2:text-yellow-300 prose-h3:text-purple-400 prose-h4:text-pink-300 prose-h4:ml-4 prose-h5:text-gray-500 prose-p:text-gray-200 prose-ul:text-gray-200 prose-ol:text-gray-200 prose-pre:border-2 prose-pre:border-gray-400 prose-code:bg-gray-800 prose-code:text-white prose-code:before:content-none prose-code:after:content-none prose-a:text-cyan-300 prose-a:no-underline prose-a:font-semibold prose-strong:font-semibold prose-strong:text-emerald-400 my-20 max-w-2xl"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  );
};

export default NotePage;
