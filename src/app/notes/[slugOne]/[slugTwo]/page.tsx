import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

import { getNoteDirectory } from "@/lib/actions/notes";
import { isPathDirectory } from "@/lib/utils/fs";

type NotesRouteTwoPageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
  };
};

const NotesRouteTwoPage = async ({
  params: { slugOne, slugTwo },
}: NotesRouteTwoPageProps) => {
  const pagePath = `./posts/${slugOne}/${slugTwo}`;

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

export default NotesRouteTwoPage;
