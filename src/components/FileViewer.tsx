import { FC } from "react";
import { FolderPlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Note } from "@/types";

type FileViewerProps = {
  directory: string;
  topics: { name: string; path: string }[];
  notes: Partial<Note>[];
};

const FileViewer: FC<FileViewerProps> = ({ directory, topics, notes }) => {
  return (
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
            <FolderPlusIcon className={`h-6 w-6 fill-black stroke-white`} />
            <span className="text-base font-bold text-white">{topic.name}</span>
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
  );
};

export default FileViewer;
