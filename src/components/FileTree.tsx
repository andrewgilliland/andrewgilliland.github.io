import { FC, useState } from "react";
import {
  FolderPlusIcon,
  PencilSquareIcon,
  FolderMinusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export type FileNode = {
  name: string;
  title: string;
  path: string;
};

export type DirectoryNode = {
  name: string;
  children?: (DirectoryNode | FileNode)[];
};

type FileTreeProps = {
  mainDirectory: string;
  node: DirectoryNode | FileNode;
};

// Type guard to check if a node is of type DirectoryNode
const isDirectoryNode = (
  node: DirectoryNode | FileNode,
): node is DirectoryNode => "children" in node;

const FileTree: FC<FileTreeProps> = ({ mainDirectory, node }) => {
  const isMainDirectory = node.name === mainDirectory;
  const [isOpen, setIsOpen] = useState(isMainDirectory);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      {isMainDirectory && isDirectoryNode(node) && node.children ? (
        <div className="hidden" />
      ) : (
        <div>
          {isDirectoryNode(node) ? (
            <button
              className="flex w-full items-center gap-2 border-b border-gray-700 px-4 py-3 transition-colors hover:bg-gray-900"
              onClick={toggleOpen}
            >
              {isOpen ? (
                <FolderMinusIcon className="h-6 w-6 text-white" />
              ) : (
                <FolderPlusIcon className="h-6 w-6 text-white" />
              )}
              <span>{node.name}</span>
            </button>
          ) : (
            <Link
              href={`/notes${node.path}`}
              title={node.title}
              className="flex border-b border-gray-700 px-4 py-3 transition-colors hover:bg-gray-900"
            >
              <div className="flex w-3/4 items-center gap-2">
                <div>
                  <PencilSquareIcon className="h-5 w-5 stroke-2 text-pink-400" />
                </div>
                <span className="truncate text-base font-bold text-white">
                  {node.title}
                </span>
              </div>
            </Link>
          )}
        </div>
      )}

      {isDirectoryNode(node) && isOpen && node.children && (
        <div className="pl-4">
          {node.children.map((child, index) => (
            <FileTree mainDirectory={mainDirectory} key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileTree;
