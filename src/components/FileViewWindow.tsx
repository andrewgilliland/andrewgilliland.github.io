"use client";

import { FC, useState } from "react";
import FileTree, { DirectoryNode, FileNode } from "./FileTree";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type FileViewWindowProps = {
  directory: DirectoryNode;
};

const isDirectoryNode = (
  node: DirectoryNode | FileNode,
): node is DirectoryNode => "children" in node;

const isFileNode = (node: DirectoryNode | FileNode): node is FileNode =>
  "path" in node;

/** Recursive function to get all files that match the search term that compares by file path*/
const getFilesBySearchTerm = (
  searchTerm: string,
  node: DirectoryNode,
): FileNode[] => {
  const files: FileNode[] = [];

  if (node.children) {
    node.children.forEach((child) => {
      if (
        isFileNode(child) &&
        child.path.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        files.push(child);
      }

      if (isDirectoryNode(child)) {
        files.push(...getFilesBySearchTerm(searchTerm, child));
      }
    });
  }

  return files;
};

const FileViewWindow: FC<FileViewWindowProps> = ({ directory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = getFilesBySearchTerm(searchTerm, directory);
  const mainDirectory = directory.name;

  return (
    <div className="relative mb-4 overflow-hidden border-2 border-white">
      <div className="flex w-full items-center justify-between gap-2 border-2 border-black bg-cyan-300 px-4 py-3">
        <h2 className="text-lg font-bold capitalize text-black">
          {mainDirectory}
        </h2>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder={`Search ${mainDirectory === "notes" ? "all" : mainDirectory} notes`}
          className="w-1/2 border-2 border-black bg-white px-2 py-1 font-semibold text-black"
        />
      </div>
      {/* Custom Scrollbar with Tailwindcss - https://preline.co/docs/custom-scrollbar.html */}
      <div className="h-[26rem] overflow-y-auto border-b-2 border-r-2 border-black [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-thumb]:bg-pink-300 dark:[&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-track]:rounded-none [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar]:w-2">
        {searchTerm !== "" ? (
          // Success state
          <>
            {searchResults.length > 0 ? (
              <>
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={`/notes${result.path}`}
                    title={result.title}
                    className="flex w-full items-center gap-2 border-b border-gray-700 px-4 py-3 transition-colors hover:bg-gray-900"
                  >
                    <PencilSquareIcon className="h-5 w-5" />
                    <span>{result.title}</span>
                  </Link>
                ))}
              </>
            ) : (
              // Empty state
              <div className="p-4 text-center text-gray-300">
                No notes found with the search term &quot;{searchTerm}&quot;
              </div>
            )}
          </>
        ) : (
          // Default state
          <FileTree mainDirectory={mainDirectory} node={directory} />
        )}
      </div>
    </div>
  );
};

export default FileViewWindow;
