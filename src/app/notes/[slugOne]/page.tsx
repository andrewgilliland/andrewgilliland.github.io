import NoteRoute from "@/components/NoteRoute";
import { getNotesFromSlug } from "@/lib/actions/notes";

type NotesRouteOnePageProps = {
  params: {
    slugOne: string;
  };
};

const NotesRouteOnePage = async ({
  params: { slugOne },
}: NotesRouteOnePageProps) => {
  const { note, topic, notes, topics } = await getNotesFromSlug(slugOne);

  return <NoteRoute note={note} topic={topic} topics={topics} notes={notes} />;
};

export default NotesRouteOnePage;
