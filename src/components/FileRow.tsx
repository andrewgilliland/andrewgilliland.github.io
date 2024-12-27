import { FileNode } from "@/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";

type FileRowProps = {
  fileNode: FileNode;
};

const FileRow: FC<FileRowProps> = ({ fileNode }) => {
  return (
    <Link
      href={`/notes${fileNode.path}`}
      title={fileNode.title}
      className="flex border-b border-gray-700 px-4 py-3 transition-colors hover:bg-gray-900"
    >
      <div className="flex w-full items-center gap-2">
        <div>
          <PencilSquareIcon className="h-5 w-5 stroke-2 text-pink-400" />
        </div>
        <span className="truncate text-base font-bold text-white">
          {fileNode.title}
        </span>
      </div>
    </Link>
  );
};

export default FileRow;
