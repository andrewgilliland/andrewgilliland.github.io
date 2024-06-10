import NoteRoute from "@/components/NoteRoute";
import { getNotesFromSlugThree } from "@/lib/actions/notes";

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
  const { note, topic, notes, topics } = await getNotesFromSlugThree(
    slugOne,
    slugTwo,
    slugThree
  );

  return <NoteRoute note={note} topic={topic} topics={topics} notes={notes} />;
};

export default NotesRouteThreePage;
