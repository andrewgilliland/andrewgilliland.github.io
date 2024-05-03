import { FC, useEffect, useState } from "react";
import { marked } from "marked";
import BackButton from "./BackButton";
import ColorDivider from "./ColorDivider";
import { HeadingElement, Note } from "@/types";
import { useRouter } from "next/router";
// import BlogOutlineCard from "@/components/BlogOutlineCard";

type NotePageProps = {
  note: Note;
};

const NotePage: FC<NotePageProps> = ({
  note: {
    frontmatter: { title, excerpt, date },
    content,
  },
}) => {
  const router = useRouter();
  // const [headingElements, setHeadingElements] = useState<HeadingElement[]>([]);
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
    <div className="px-[10%] md:p-0 md:w-[40em] mx-auto mt-12">
      <div>
        <BackButton back={router.back} />
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-8">{title}</h1>
        <div className="text-gray-200 text-xl mt-2">{excerpt}</div>
        <div className="text-sm text-gray-400 mt-2">
          Last Updated: {formattedDate}
        </div>
        <ColorDivider />
      </div>

      <div
        className="prose prose-h2:text-yellow-300 prose-h3:text-gray-300 prose-h4:text-gray-300 prose-h4:ml-4 prose-h5:text-gray-500 prose-p:text-gray-200 prose-ul:text-gray-200 prose-ol:text-gray-200 prose-pre:border-2 prose-pre:border-gray-400 prose-code:bg-gray-800 prose-code:text-white prose-code:before:content-none prose-code:after:content-none prose-a:text-cyan-300 prose-a:no-underline prose-a:font-semibold prose-strong:font-semibold prose-strong:text-emerald-400 my-20 max-w-2xl"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  );
};

export default NotePage;
