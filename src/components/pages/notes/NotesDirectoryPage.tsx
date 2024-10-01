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

  console.log("topics: ", topics);
  console.log("notes: ", notes);

  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
      <section className="mt-10 md:mt-0 mx-8 md:mx-0 mb-24">
        <h2 className="capitalize font-bold text-gray-100 text-3xl md:text-4xl stroke-white">
          {`${directory ? directory : "Topics"}`}
        </h2>
        {topics.length > 0 && (
          <CardGrid>
            {topics.map((topic, index) => (
              <TopicCard key={index} topic={topic} />
            ))}
          </CardGrid>
        )}
      </section>
      {notes.length > 0 && (
        <section className="mt-10 mx-8 md:mx-0 mb-24">
          <h2 className="capitalize font-bold text-gray-100 text-3xl md:text-4xl stroke-white">
            Notes
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
