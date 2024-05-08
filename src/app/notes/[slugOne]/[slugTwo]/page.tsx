import NoteRoute from "@/components/NoteRoute";
import { getNotesFromSlugTwo } from "@/lib/actions/notes";

type NotesRouteOnePageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
  };
};

const NotesRouteOnePage = async ({
  params: { slugOne, slugTwo },
}: NotesRouteOnePageProps) => {
  const { note, topic, notes, topics } = await getNotesFromSlugTwo(
    slugOne,
    slugTwo
  );

  return <NoteRoute note={note} topic={topic} topics={topics} notes={notes} />;
};

export default NotesRouteOnePage;
