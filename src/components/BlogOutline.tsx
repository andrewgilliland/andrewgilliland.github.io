import { HeadingElement } from "../../types";

type BlogOutlineProps = {
  headingElements: HeadingElement[];
  title: string;
};

const BlogOutline = ({ headingElements, title }: BlogOutlineProps) => {
  return (
    <div className="fixed top-[50%] right-[12%] border-2 border-white rounded-md p-4">
      <div className="font-bold underline">{title}</div>
      {headingElements.map(({ id, text, tag }, index: number) => {
        return (
          <div
            key={index}
            className="rounded-md"
            style={{ scrollMarginTop: "4rem" }}
          >
            <a
              href={`#${id}`}
              className={`${tag === "H3" && "ml-4 text-gray-400"} ${
                tag === "H4" && "ml-8 text-gray-500"
              }}`}
            >
              {text}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BlogOutline;
