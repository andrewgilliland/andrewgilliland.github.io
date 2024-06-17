import { FC } from "react";
import { isPathDirectory } from "@/lib/utils/fs";
import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

type NotesRouteTwoPageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
  };
};

const NotesRouteTwoPage: FC<NotesRouteTwoPageProps> = async ({
  params: { slugOne, slugTwo },
}) => {
  const pagePath = `./posts/${slugOne}/${slugTwo}`;
  const isDirectory = await isPathDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage directory={slugTwo} pagePath={pagePath} />
      ) : (
        <NotePage pagePath={pagePath} />
      )}
    </>
  );
};

export default NotesRouteTwoPage;
