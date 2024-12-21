import { FC } from "react";

type FileNode = {
  name: string;
  children?: FileNode[];
};

type FileTreeProps = {
  node: FileNode;
};

const FileTree: FC<FileTreeProps> = ({ node }) => {
  return (
    <div className="ml-4">
      <div>{node.name}</div>
      {node.children && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <FileTree key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileTree;
