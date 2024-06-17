import { getNoteDirectory } from "@/lib/actions/notes";
import NotesDirectoryPage from "@/components/NotesDirectoryPage";

const NotesPage = async ({ topic }) => {
  const { notes, topics } = await getNoteDirectory("./posts");

  return <NotesDirectoryPage topic={topic} notes={notes} topics={topics} />;
};

export default NotesPage;
