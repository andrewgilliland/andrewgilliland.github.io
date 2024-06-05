import Link from "next/link";
import { Note } from "@/types";
import { FireIcon } from "@heroicons/react/20/solid";

type NoteCardProps = {
  note: Note;
  index: number;
};

const NoteCard = ({ note }: NoteCardProps) => {
  const {
    path,
    frontmatter: { date, title, excerpt },
  } = note;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      data-cy={`note-card-${path}`}
      href={`/notes/${path}`}
      className="group relative"
    >
      <div className="absolute bg-black border-2 border-white rounded w-full h-full bottom-0" />
      <div
        className={`bg-black border-2 border-white rounded h-full transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1`}
      >
        <div className="flex flex-wrap border-b-2 border-white w-full h-48">
          {[
            { color: "pink" },
            { color: "cyan" },
            { color: "emerald" },
            { color: "yellow" },
          ].map(({ color }, index) => (
            <div
              key={index}
              className={`flex justify-center items-center bg-${color}-300 h-1/2 w-1/2`}
            >
              <FireIcon className={`text-${color}-200 h-12 w-12`} />
            </div>
          ))}
        </div>
        <div className="mt-6 px-4 pb-4">
          <div>
            <p className="text-gray-300 text-sm">{formattedDate}</p>
            <h3 className="font-semibold text-gray-100 text-lg">{title}</h3>
            <p className="text-gray-300 text-sm">{excerpt}</p>
          </div>
          <div className="text-gray-300 text-sm">Read More</div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
