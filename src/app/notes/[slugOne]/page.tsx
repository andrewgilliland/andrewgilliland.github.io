import { FC } from "react";
import { isPathDirectory } from "@/lib/utils/fs";
import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

type NotesRouteOnePageProps = {
  params: {
    slugOne: string;
  };
};

const NotesRouteOnePage: FC<NotesRouteOnePageProps> = async ({
  params: { slugOne },
}) => {
  const pagePath = `./posts/${slugOne}`;
  const isDirectory = await isPathDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage directory={slugOne} pagePath={pagePath} />
      ) : (
        <NotePage pagePath={pagePath} />
      )}
    </>
  );
};

export default NotesRouteOnePage;
