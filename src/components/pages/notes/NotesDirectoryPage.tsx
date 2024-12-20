import { FC } from "react";
import { getNoteDirectory } from "@/lib/actions/notes";
import TopicCard from "@/components/TopicCard";
import NoteCard from "@/components/NoteCard";
import CardGrid from "@/components/CardGrid";
import { FolderPlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type NotesDirectoryPageProps = {
  directory: string;
  pagePath: string;
};

const NotesDirectoryPage: FC<NotesDirectoryPageProps> = async ({
  directory,
  pagePath,
}) => {
  const { notes, topics } = await getNoteDirectory(pagePath);

  console.log("directory: ", directory);

  return (
    <div className="mx-auto mt-14 w-full max-w-3xl">
      {directory === "" && (
        <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
          <h2 className="stroke-white text-3xl font-bold capitalize text-gray-100 md:text-4xl">
            Notes
          </h2>
          <p className="mt-4 text-gray-300">
            This is a collection of notes on various topics. My notes may be
            code snippets, info directly from docs, or what I have learned. I
            will add resources to give due credit where info comes from. Click
            on a topic below to view notes related to that topic.
          </p>
          {/* {topics.length > 0 && (
          <CardGrid>
          {topics.map((topic, index) => (
            <TopicCard key={index} topic={topic} />
            ))}
            </CardGrid>
            )} */}
        </section>
      )}

      <section className="mx-8 mb-24 mt-10 md:mx-0 md:mt-0">
        {notes.length > 0 && (
          <div className="grid overflow-hidden rounded-lg border-2 border-white">
            <div className="bg-cyan-300 px-4 py-2">
              <h2 className="text-lg font-bold text-black">
                {directory ? decodeURIComponent(directory) : "Notes"}
              </h2>
            </div>
            {topics.map((topic, index) => (
              <Link
                href={`/${topic.path.toLocaleLowerCase()}`}
                key={index}
                className={`flex items-center gap-2 px-4 py-2 ${index && "border-t"}`}
              >
                <FolderPlusIcon className={`h-6 w-6 fill-black stroke-white`} />
                <span className="text-base font-bold text-white">
                  {topic.name}
                </span>
              </Link>
            ))}
            {notes.map((note, index) => (
              <Link
                href={`/notes/${note.path!}`}
                key={index}
                className={`flex items-center gap-2 px-6 py-2 ${true && "border-t"}`}
              >
                <PencilSquareIcon
                  className={`h-5 w-5 fill-black stroke-white`}
                />
                <span className="text-base font-bold text-white">
                  {note.frontmatter.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* {notes.length > 0 && (
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
      )} */}
    </div>
  );
};

export default NotesDirectoryPage;
