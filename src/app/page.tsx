import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { getNotes } from "@/lib/actions/notes";
import HomeHero from "@/components/pages/home/HomeHero";
import TopicCard from "@/components/TopicCard";
import ColorDivider from "@/components/ColorDivider";
import CenteredSection from "@/components/sections/CenteredSection";

//* Design Inspiration
// https://howdy.com/
// https://gumroad.com/
// https://salehmubashar.com/
// https://www.hover.dev/

export default async function HomePage() {
  const { notes } = await getNotes();
  const notesSlice = notes.slice(0, 5);

  const topics = [
    {
      name: "JavaScript",
      path: "/notes/javascript",
      color: "yellow",
    },
    { name: "CSS", path: "/notes/css", color: "cyan" },
    { name: "Swift", path: "/notes/swift", color: "red" },
  ];

  return (
    <div className="relative">
      <div>
        <HomeHero />
        <CenteredSection>
          <div className="flex flex-col">
            {notesSlice.map(({ path, frontmatter }, index) => (
              <Link
                key={index}
                className={`${index && "mt-4"} group relative`}
                href={path!}
                title={frontmatter!.title}
              >
                <div
                  className={`absolute bg-black border-2 border-white rounded w-full h-full bottom-0`}
                />
                <div className="flex justify-between items-center bg-black border-2 border-white rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <h4 className="font-bold text-white truncate max-w-[75%]">
                    {frontmatter!.title}
                  </h4>
                  <PencilSquareIcon className="h-6 w-6 stroke-white min-w-max" />
                </div>
              </Link>
            ))}
          </div>
        </CenteredSection>

        <section className="flex flex-col border-b-2 border-white md:flex-row">
          <div className="flex-1 bg-cyan-300 p-[6.5vw]">
            <h2 className="text-center font-bold text-white text-4xl stroke-black">
              Notes
            </h2>

            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-black text-2xl">
                  Some topics to explore:
                </h2>
              </div>
              <div className="grid gap-4 mt-6 w-60">
                {topics.map((topic, index) => (
                  <TopicCard topic={topic} key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 bg-yellow-300 border-t-2 border-l-0 border-white p-[6.5vw] md:w-1/2 md:border-t-0 md:border-l-2"></div>
        </section>

        <ColorDivider className="w-full h-6" />
      </div>
    </div>
  );
}
