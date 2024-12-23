import { FC } from "react";
import { getNoteDirectory } from "@/lib/actions/notes";
import FileTree from "@/components/FileTree";
import FileViewer from "@/components/FileViewer";

type NotesDirectoryPageProps = {
  directory: string;
  pagePath: string;
};

const NotesDirectoryPage: FC<NotesDirectoryPageProps> = async ({
  directory,
  pagePath,
}) => {
  const { notes, topics } = await getNoteDirectory(pagePath);

  // console.log("directory: ", directory);

  const dir = {
    name: "Notes",
    children: [
      {
        name: "AWS",
        children: [
          {
            name: "data-governance.md",
            title: "Data Governance",
            path: "aws/data-governance",
          },

          {
            name: "S3",
            children: [
              { name: "basics.md", title: "Basics", path: "aws/s3/basics" },
              {
                name: "static-website.md",
                title: "Static Website",
                path: "aws/s3/static-website",
              },
            ],
          },
        ],
      },
      {
        name: "CSS",
        children: [{ name: "basics.md", title: "Basics", path: "css/basics" }],
      },
      { name: "general.md", title: "General", path: "general" },
    ],
  };

  return (
    <div className="mx-auto mt-14 w-full max-w-3xl">
      {directory === "" && (
        <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
          <h2 className="stroke-white text-3xl font-bold capitalize text-gray-100 md:text-4xl">
            Notes
          </h2>
          <p className="mt-4 text-gray-300">
            This is a collection of notes on various topics. My notes may be
            code snippets, info directly from docs, or what I have learned. I
            will add resources to give due credit where info comes from. Click
            on a topic below to view notes related to that topic.
          </p>
        </section>
      )}

      <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
        {notes.length > 0 && (
          <FileViewer directory={directory} topics={topics} notes={notes} />
        )}
      </section>

      <div className="relative mb-4 overflow-hidden border-2 border-white">
        <div className="flex w-full items-center gap-2 border-2 border-black bg-cyan-300 px-4 py-3">
          <h2 className="text-lg font-bold text-black">Notes</h2>
        </div>
        {/* Custom Scrollbar with Tailwindcss - https://preline.co/docs/custom-scrollbar.html */}
        <div className="h-96 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-thumb]:bg-pink-300 dark:[&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-track]:rounded-none [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar]:w-2">
          <FileTree node={dir} />
        </div>
      </div>
    </div>
  );
};

export default NotesDirectoryPage;
