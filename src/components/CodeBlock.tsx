import { FC, ReactElement } from "react";
import { codeToHtml } from "shiki";

type CodeBlockProps = {
  // children: ReactElement;
  code: string;
  language: string;
  fileName: string;
};

const CodeBlock: FC<CodeBlockProps> = async ({ code, language, fileName }) => {
  const out = await codeToHtml(code, {
    lang: language,
    theme: "github-dark-high-contrast",
  });

  return (
    <div className="border-2 rounded">
      <div className="flex justify-between border-b-2 border-white">
        <div className="flex">
          <div className="flex gap-1 px-3 py-2">
            <div className="bg-red-500 rounded-full h-3 w-3" />
            <div className="bg-yellow-500 rounded-full h-3 w-3" />
            <div className="bg-green-500 rounded-full h-3 w-3" />
          </div>
          <div className="flex justify-center items-center border-l-2 border-r-2 text-sm text-white px-3">
            {fileName}
          </div>
        </div>
        <div className="group flex justify-center items-center border-l-2 border-white px-3">
          <div className="bg-white border-2 border-white h-4 w-4 opacity-50 group-hover:opacity-100 transition" />
        </div>
      </div>
      <div
        className="prose prose-pre:px-8 prose-pre:py-6 prose-pre:font-mono prose-code:grid"
        style={{ border: "none" }}
        dangerouslySetInnerHTML={{ __html: out }}
      />
    </div>
  );
};

export default CodeBlock;
