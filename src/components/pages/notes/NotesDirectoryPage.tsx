import { FC } from "react";
import { getNoteDirectory } from "@/lib/actions/notes";
import TopicCard from "@/components/TopicCard";
import NoteCard from "@/components/NoteCard";

type NotesDirectoryPageProps = {
  directory: string;
  pagePath: string;
};

const NotesDirectoryPage: FC<NotesDirectoryPageProps> = async ({
  directory,
  pagePath,
}) => {
  const { notes, topics } = await getNoteDirectory(pagePath);

  // notes.map((note) => {
  //   console.log("NotesDirectoryPage note: ", note);
  // });

  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
      <section className="mt-10 md:mt-0 mx-8 md:mx-0 mb-24">
        <h2 className="capitalize font-bold text-gray-100 text-3xl md:text-4xl stroke-white">
          {`${directory ? `${directory} ` : "Topics"}`}
        </h2>
        {topics.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {topics.map((topic, index) => (
              <TopicCard key={index} topic={topic} />
            ))}
          </div>
        )}
      </section>
      {notes.length > 0 && (
        <section className="mt-10 mx-8 md:mx-0 mb-24">
          <h2 className="capitalize font-bold text-gray-100 text-3xl md:text-4xl stroke-white">
            Notes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {notes.map((note, index) => (
              <NoteCard key={index} note={note} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default NotesDirectoryPage;
