import { FC } from "react";
import { RoutePageProps } from "@/types";
import NotePage from "./NotePage";
import NotesDirectoryPage from "./NotesDirectoryPage";

const NoteRoute: FC<RoutePageProps> = ({
  note,
  topic,
  topics = [],
  notes = [],
}) => (
  <>
    {note ? (
      <NotePage note={note} />
    ) : (
      <NotesDirectoryPage topic={topic} topics={topics} notes={notes} />
    )}
  </>
);

export default NoteRoute;
