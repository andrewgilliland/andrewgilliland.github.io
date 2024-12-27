import { FC } from "react";
import { getNotesFileTree } from "@/lib/actions/notes";
import FileViewWindow from "@/components/FileViewWindow";

type NotesDirectoryPageProps = {
  directory: string;
  pagePath: string;
};

const NotesDirectoryPage: FC<NotesDirectoryPageProps> = async ({
  directory,
  pagePath,
}) => {
  const direct = await getNotesFileTree(pagePath);

  return (
    <div className="mx-auto mt-14 w-full max-w-3xl">
      {directory === "" && (
        <section className="mx-4 my-10 md:mx-0">
          <h2 className="stroke-white text-3xl font-bold capitalize text-gray-100 md:text-4xl">
            Notes
          </h2>
          <p className="mt-4 text-gray-300">
            A collection of notes on various topics. My notes may be code
            snippets, info that comes directly from docs, or what I have
            learned. I will add resources to give due credit where info comes
            from. Click on a topic below to view notes related to that topic.
          </p>
        </section>
      )}

      <section className="mx-4 my-10 md:mx-0">
        <FileViewWindow directory={direct} />
      </section>

      {/* <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
        {notes.length > 0 && (
          <FileViewer directory={directory} topics={topics} notes={notes} />
        )}
      </section> */}
    </div>
  );
};

export default NotesDirectoryPage;
