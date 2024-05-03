import { getNotesAndTopics } from "@/lib/actions/notes";
import NotesPageBody from "@/components/NotesPageBody";


const NotesPage = async ({ topic }) => {
  const { notes, topics } = await getNotesAndTopics();

  return <NotesPageBody topic={topic} notes={notes} topics={topics} />;
};

export default NotesPage;
