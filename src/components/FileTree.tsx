"use client";

import { FC, useState } from "react";
import {
  FolderPlusIcon,
  PencilSquareIcon,
  FolderMinusIcon,
} from "@heroicons/react/24/outline";

type FileNode = {
  name: string;
  title: string;
  path: string;
};

type DirectoryNode = {
  name: string;
  children?: (DirectoryNode | FileNode)[];
};

type FileTreeProps = {
  node: DirectoryNode | FileNode;
};

// Type guard to check if a node is of type DirectoryNode
const isDirectoryNode = (
  node: DirectoryNode | FileNode,
): node is DirectoryNode => "children" in node;

const FileTree: FC<FileTreeProps> = ({ node }) => {
  const isMainDirectory = node.name === "Notes";
  const [isOpen, setIsOpen] = useState(isMainDirectory);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      {isMainDirectory ? (
        <></>
      ) : (
        <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3 transition-colors hover:bg-gray-900">
          {isDirectoryNode(node) ? (
            <button onClick={toggleOpen} className="flex items-center gap-1">
              {isOpen ? (
                <FolderMinusIcon className="h-6 w-6" />
              ) : (
                <FolderPlusIcon className="h-6 w-6" />
              )}
              <span>{node.name}</span>
            </button>
          ) : (
            <>
              <PencilSquareIcon className="h-5 w-5" />
              <span>{node.title}</span>
            </>
          )}
        </div>
      )}

      {isDirectoryNode(node) && isOpen && node.children && (
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
