import { FC } from "react";
import { isPathDirectory } from "@/lib/utils/fs";
import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

type NotesSlugFourPageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
    slugThree: string;
    slugFour: string;
  };
};

const NotesSlugFourPage: FC<NotesSlugFourPageProps> = async ({
  params: { slugOne, slugTwo, slugThree, slugFour },
}) => {
  const pagePath = `./posts/${slugOne}/${slugTwo}/${slugThree}/${slugFour}`;
  const isDirectory = await isPathDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage directory={slugFour} pagePath={pagePath} />
      ) : (
        <NotePage pagePath={pagePath} />
      )}
    </>
  );
};

export default NotesSlugFourPage;
