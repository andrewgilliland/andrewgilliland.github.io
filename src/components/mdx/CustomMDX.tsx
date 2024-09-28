import { MDXRemote } from "next-mdx-remote/rsc";
import DownloadButton from "@/components/DownloadButton";
import CodeBlock from "@/components/CodeBlock";

// ! TODO: Add prop types
const CustomMDX = (props) => {
  // * This is a list of all custom components that can be used in MDX files
  const components = { CodeBlock, DownloadButton };

  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};

export default CustomMDX;
