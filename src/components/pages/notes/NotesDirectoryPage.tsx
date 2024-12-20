import { FC } from "react";
import { getNoteDirectory } from "@/lib/actions/notes";
import TopicCard from "@/components/TopicCard";
import NoteCard from "@/components/NoteCard";
import CardGrid from "@/components/CardGrid";

type NotesDirectoryPageProps = {
  directory: string;
  pagePath: string;
};

const NotesDirectoryPage: FC<NotesDirectoryPageProps> = async ({
  directory,
  pagePath,
}) => {
  const { notes, topics } = await getNoteDirectory(pagePath);

  return (
    <div className="mx-auto mt-14 w-full max-w-3xl">
      <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
        <h2 className="stroke-white text-3xl font-bold capitalize text-gray-100 md:text-4xl">
          Notes
        </h2>
        {!directory && (
          <p className="mt-4 text-gray-300">
            This is a collection of notes on various topics. My notes may be
            code snippets, info directly from docs, or what I have learned. I
            will add resources to give due credit where info comes from. Click
            on a topic below to view notes related to that topic.
          </p>
        )}
        {topics.length > 0 && (
          <CardGrid>
            {topics.map((topic, index) => (
              <TopicCard key={index} topic={topic} />
            ))}
          </CardGrid>
        )}
      </section>
      {notes.length > 0 && (
        <section className="mx-8 mb-24 mt-10 md:mx-0">
          <h2 className="stroke-white text-3xl font-bold capitalize text-gray-100 md:text-4xl">
            {decodeURIComponent(directory)}
          </h2>
          <CardGrid>
            {notes.map((note, index) => (
              <NoteCard key={index} note={note} index={index} />
            ))}
          </CardGrid>
        </section>
      )}
    </div>
  );
};

export default NotesDirectoryPage;
