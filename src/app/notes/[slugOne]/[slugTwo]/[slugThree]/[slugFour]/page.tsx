import NotePage from "@/components/NotePage";

import NotesDirectoryPage from "@/components/NotesDirectoryPage";
import { getNoteDirectory } from "@/lib/actions/notes";
import { isPathDirectory } from "@/lib/utils/fs";
import { FC } from "react";

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

  const { note, notes, topics } = await getNoteDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage topic={slugTwo} topics={topics} notes={notes} />
      ) : (
        <NotePage note={note} />
      )}
    </>
  );
};

export default NotesSlugFourPage;
