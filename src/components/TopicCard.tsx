import { FC } from "react";
import { FolderIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type TopicCardProps = {
  topic: string;
};

const TopicCard: FC<TopicCardProps> = ({ topic }) => {
  return (
    <Link href={`/notes/${topic}`} className={`group relative`}>
      <div className="absolute bg-black border-2 border-white rounded w-full h-full bottom-0" />
      <div className="flex justify-between bg-black border-2 border-white rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="font-bold text-gray-100">{topic}</div>
        <FolderIcon className="h-6 w-6" />
      </div>
    </Link>
  );
};

export default TopicCard;
