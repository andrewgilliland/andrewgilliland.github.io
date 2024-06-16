import NotePage from "@/components/NotePage";
import NoteRoute from "@/components/NoteRoute";
import NotesPageBody from "@/components/NotesPageBody";
import { getTopicsAndNotes } from "@/lib/actions/notes";

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

  const { note, notes, topics } = await getTopicsAndNotes(pagePath);

  return (
    <>
      {note ? (
        <NotePage note={note} />
      ) : (
        <NotesPageBody topic={slugThree} topics={topics} notes={notes} />
      )}
    </>
  );
};

export default NotesRouteThreePage;
