import NotePage from "@/components/NotePage";
import { getResume as getContent } from "@/lib/actions/content";

const ResumePage = async () => {
  const { note } = await getContent({ fileName: "resume.md" });

  return <NotePage note={note} />;
};

export default ResumePage;
