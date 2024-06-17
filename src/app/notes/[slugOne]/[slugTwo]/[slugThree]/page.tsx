import { FC } from "react";
import { isPathDirectory } from "@/lib/utils/fs";
import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

type NotesRouteThreePageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
    slugThree: string;
  };
};

const NotesRouteThreePage: FC<NotesRouteThreePageProps> = async ({
  params: { slugOne, slugTwo, slugThree },
}) => {
  const pagePath = `./posts/${slugOne}/${slugTwo}/${slugThree}`;
  const isDirectory = await isPathDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage directory={slugThree} pagePath={pagePath} />
      ) : (
        <NotePage pagePath={pagePath} />
      )}
    </>
  );
};

export default NotesRouteThreePage;
