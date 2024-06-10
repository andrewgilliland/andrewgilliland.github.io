import NoteRoute from "@/components/NoteRoute";
import { getNotesFromSlugTwo } from "@/lib/actions/notes";

type NotesRouteTwoPageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
  };
};

const NotesRouteTwoPage = async ({
  params: { slugOne, slugTwo },
}: NotesRouteTwoPageProps) => {
  const { note, topic, notes, topics } = await getNotesFromSlugTwo(
    slugOne,
    slugTwo
  );

  console.log("topics: ", topics);

  return <NoteRoute note={note} topic={topic} topics={topics} notes={notes} />;
};

export default NotesRouteTwoPage;
