import { FC } from "react";
import { RoutePageProps } from "@/types";
import NotePage from "./NotePage";
import NotesPage from "@/pages/notes";

const Route: FC<RoutePageProps> = ({ note, topic, notes, topics }) => (
  <>
    {note ? (
      <NotePage note={note} />
    ) : (
      <NotesPage topic={topic} topics={topics} notes={notes} />
    )}
  </>
);

export default Route;
