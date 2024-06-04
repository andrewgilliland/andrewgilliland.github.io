import ColorDivider from "@/components/ColorDivider";
import { getResume as getContent } from "@/lib/actions/content";
import { marked } from "marked";
import { useRouter } from "next/router";

const ResumePage = async () => {
  const {
    note: {
      frontmatter: { title, excerpt, date },
      content,
    },
  } = await getContent({ fileName: "resume.md" });

  // ! "use client" is needed to use hook !
  // ! And needs to be its own component ??? !
  //   const router = useRouter();

  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-[10%] md:p-0 md:w-[40em] mx-auto mt-12">
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

export default ResumePage;
