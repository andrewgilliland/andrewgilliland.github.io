import NotesDirectoryPage from "@/components/pages/notes/NotesDirectoryPage";

export const parentPath = "../markdown/notes";

const NotesPage = () => {
  const pagePath = parentPath;

  return <NotesDirectoryPage directory="" pagePath={pagePath} />;
};

export default NotesPage;
