import { FC } from "react";
import NoteRoute from "@/components/pages/notes/NoteRoute";

type NotesRouteOnePageProps = {
  params: {
    slugOne: string;
  };
};

const NotesRouteOnePage: FC<NotesRouteOnePageProps> = async ({
  params: { slugOne },
}) => {
  const pagePath = `./posts/${slugOne}`;

  return <NoteRoute directory={slugOne} pagePath={pagePath} />;
};

export default NotesRouteOnePage;
