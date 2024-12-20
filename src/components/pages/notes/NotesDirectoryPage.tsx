import { FC } from "react";
import { getNoteDirectory } from "@/lib/actions/notes";

import { FolderPlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
          <div className="rounded border-2 border-white">
            <div className="grid overflow-hidden rounded border-2 border-black">
              <div className="rounded-t bg-cyan-300 px-4 py-2">
                <h2 className="text-lg font-bold text-black">
                  {directory ? decodeURIComponent(directory) : "Notes"}
                </h2>
              </div>
              {topics.map((topic, index) => (
                <Link
                  href={`/${topic.path.toLocaleLowerCase()}`}
                  key={index}
                  className={`flex items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-900 ${index && "border-t border-gray-700"}`}
                >
                  <FolderPlusIcon
                    className={`h-6 w-6 fill-black stroke-white`}
                  />
                  <span className="text-base font-bold text-white">
                    {topic.name}
                  </span>
                </Link>
              ))}
              {notes.map(({ path, frontmatter }, index) => (
                <Link
                  href={`/notes/${path!}`}
                  key={index}
                  className={`transition-colors hover:bg-gray-900 ${true && "border-t border-gray-700"}`}
                  title={frontmatter!.title}
                >
                  <div className="flex w-3/4 items-center gap-2 px-6 py-3">
                    <div>
                      <PencilSquareIcon
                        className={`h-5 w-5 fill-black stroke-white`}
                      />
                    </div>
                    <p className="truncate text-base font-bold text-white">
                      {frontmatter!.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default NotesDirectoryPage;
