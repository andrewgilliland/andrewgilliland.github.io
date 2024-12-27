import { FC, useState } from "react";
import { FolderPlusIcon, FolderMinusIcon } from "@heroicons/react/24/outline";
import FileRow from "./FileRow";
import { DirectoryNode, FileNode, isDirectoryNode } from "@/types";

type FileTreeProps = {
  mainDirectory: string;
  node: DirectoryNode | FileNode;
  depth?: number;
};

const FileTree: FC<FileTreeProps> = ({ mainDirectory, node, depth = 0 }) => {
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
              className="flex w-full items-center gap-2 border-b border-gray-800 py-3 pr-4 transition-colors hover:bg-gray-900"
              onClick={toggleOpen}
              style={{ paddingLeft: 16 * depth }}
            >
              {isOpen ? (
                <FolderMinusIcon className="h-6 w-6 text-white" />
              ) : (
                <FolderPlusIcon className="h-6 w-6 text-white" />
              )}
              <span>{node.name}</span>
            </button>
          ) : (
            <FileRow fileNode={node} depth={depth} />
          )}
        </div>
      )}

      {isDirectoryNode(node) && isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileTree
              mainDirectory={mainDirectory}
              key={index}
              node={child}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileTree;
