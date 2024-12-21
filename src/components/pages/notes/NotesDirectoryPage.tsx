import { FC } from "react";
import { getNoteDirectory } from "@/lib/actions/notes";
import { FolderPlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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

  console.log("directory: ", directory);

  const dir = {
    name: "Notes",
    children: [
      {
        name: "AWS",
        children: [
          { name: "intro.md" },
          { name: "setup.md" },
          {
            name: "S3",
            children: [{ name: "basics.md" }, { name: "static-website.md" }],
          },
        ],
      },
      {
        name: "CSS",
        children: [{ name: "basics.md" }],
      },
      { name: "general.md" },
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

      <div className="mb-4 border">
        <FileTree node={dir} />
      </div>
    </div>
  );
};

export default NotesDirectoryPage;
