import { useRouter } from "next/router";
import DownloadButton from "@/components/DownloadButton";
import ColorDivider from "@/components/ColorDivider";
import { transformMarkdownFile } from "@/lib/actions/markdown";

const ResumePage = async () => {
  const {
    frontmatter: { title, date },
    html,
  } = await transformMarkdownFile("resume.md");

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
        {/* <button
          className="border-2 border-pink-300 text-pink-300"
          onClick={downloadPdf}
        /> */}
        {/* <DownloadButton /> */}
        {title && (
          <h1 className="text-4xl md:text-5xl lg:text-7xl mt-8">{title}</h1>
        )}
        {date && (
          <div className="text-sm text-gray-400 mt-2">
            Last Updated: {formattedDate}
          </div>
        )}
        <ColorDivider />
      </div>

      <div
        className="prose prose-h2:text-yellow-300 prose-h3:text-purple-400 prose-h4:text-pink-300 prose-h4:ml-4 prose-h5:text-gray-500 prose-p:text-gray-200 prose-ul:text-gray-200 prose-ol:text-gray-200 prose-pre:border-2 prose-pre:border-gray-400 prose-code:bg-gray-800 prose-code:text-white prose-code:before:content-none prose-code:after:content-none prose-a:text-cyan-300 prose-a:no-underline prose-a:font-semibold prose-strong:font-semibold prose-strong:text-emerald-400 my-20 max-w-2xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default ResumePage;
