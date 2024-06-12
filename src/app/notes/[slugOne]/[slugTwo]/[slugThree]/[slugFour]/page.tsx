import NoteRoute from "@/components/NoteRoute";
import { getNotesFromSlugFour } from "@/lib/actions/notes";
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
  const { note, topic, notes, topics } = await getNotesFromSlugFour(
    slugOne,
    slugTwo,
    slugThree,
    slugFour
  );

  return <NoteRoute note={note} topic={topic} topics={topics} notes={notes} />;
};

export default NotesSlugFourPage;
