import NotePage from "@/components/NotePage";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";
import { getNoteDirectory } from "@/lib/actions/notes";
import { isPathDirectory } from "@/lib/utils/fs";

type NotesRouteOnePageProps = {
  params: {
    slugOne: string;
  };
};

const NotesRouteOnePage = async ({
  params: { slugOne },
}: NotesRouteOnePageProps) => {
  const pagePath = `./posts/${slugOne}`;

  const isDirectory = await isPathDirectory(pagePath);

  const { note, notes, topics } = await getNoteDirectory(pagePath);

  return (
    <>
      {isDirectory ? (
        <NotesDirectoryPage topic={slugOne} topics={topics} notes={notes} />
      ) : (
        <NotePage note={note} />
      )}
    </>
  );
};

export default NotesRouteOnePage;
