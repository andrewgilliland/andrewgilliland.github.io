import { FC } from "react";
import { RoutePageProps } from "@/types";
import NotePage from "./NotePage";
import NotesPageBody from "./NotesPageBody";

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
      <NotesPageBody topic={topic} topics={topics} notes={notes} />
    )}
  </>
);

export default NoteRoute;
