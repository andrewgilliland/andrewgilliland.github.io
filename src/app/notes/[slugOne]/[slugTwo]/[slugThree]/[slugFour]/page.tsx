import { FC } from "react";
import NoteRoute from "@/components/pages/notes/NoteRoute";
import { parentPath } from "@/lib/constants";

type NotesSlugFourPageProps = {
  params: {
    slugOne: string;
    slugTwo: string;
    slugThree: string;
    slugFour: string;
  };
};

const NotesSlugFourPage: FC<NotesSlugFourPageProps> = async ({
  params: { slugOne, slugTwo, slugThree, slugFour },
}) => {
  const pagePath = `${parentPath}/${slugOne}/${slugTwo}/${slugThree}/${slugFour}`;

  console.log("pagePath: ", pagePath);

  return <NoteRoute directory={slugFour} pagePath={pagePath} />;
};

export default NotesSlugFourPage;
