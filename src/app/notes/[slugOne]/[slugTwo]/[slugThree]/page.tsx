import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

import { getNoteFile, getNoteDirectory } from "@/lib/actions/notes";
import { isPathDirectory } from "@/lib/utils/fs";

type NotesRouteThreePageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
    slugThree: string;
  };
};

const NotesRouteThreePage = async ({
  params: { slugOne, slugTwo, slugThree },
}: NotesRouteThreePageProps) => {
  const pagePath = `./posts/${slugOne}/${slugTwo}/${slugThree}`;

  const isDirectory = await isPathDirectory(pagePath);

  const { note, notes, topics } = await getNoteDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage topic={slugThree} topics={topics} notes={notes} />
      ) : (
        <NotePage note={note} />
      )}
    </>
  );
};

export default NotesRouteThreePage;
