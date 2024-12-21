"use client";

import { FC, useState } from "react";
import {
  FolderPlusIcon,
  PencilSquareIcon,
  FolderMinusIcon,
} from "@heroicons/react/24/outline";

type FileNode = {
  name: string;
  children?: FileNode[];
};

type FileTreeProps = {
  node: FileNode;
};

const FileTree: FC<FileTreeProps> = ({ node }) => {
  const isMainDirectory = node.name === "Notes";
  const [isOpen, setIsOpen] = useState(isMainDirectory);
  const isDirectory = node.children && node.children.length > 0;

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      {isMainDirectory ? (
        <></>
      ) : (
        <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3 transition-colors hover:bg-gray-900">
          {isDirectory ? (
            <button onClick={toggleOpen} className="flex items-center gap-1">
              {isOpen ? (
                <FolderMinusIcon className="h-6 w-6" />
              ) : (
                <FolderPlusIcon className="h-6 w-6" />
              )}
            </button>
          ) : (
            <PencilSquareIcon className="h-5 w-5" />
          )}
          <span>{node.name}</span>
        </div>
      )}

      {isDirectory && isOpen && node.children && (
        <div className="pl-4">
          {node.children.map((child, index) => (
            <FileTree key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileTree;
