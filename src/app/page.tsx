import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { getNotes } from "@/lib/actions/notes";
import TopicCard from "@/components/TopicCard";
import CenteredSection from "@/components/sections/CenteredSection";
import TwinSections from "@/components/sections/TwinSections";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

//* Design Inspiration
// https://howdy.com/
// https://gumroad.com/
// https://salehmubashar.com/
// https://www.hover.dev/

const HomePage = async () => {
  const { notes } = await getNotes();
  const notesSlice = notes.slice(0, 5);

  const topics = [
    {
      name: "JavaScript",
      path: "./notes/javascript",
      color: "yellow",
    },
    {
      name: "React Native",
      path: "./notes/javascript/react/react-native",
      color: "cyan",
    },
    { name: "Swift", path: "./notes/swift", color: "red" },
  ];

  return (
    <div className="relative">
      <div>
        <TwinSections>
          <TwinSections.SectionOne>
            <div className="max-w-xl mx-auto">
              <h1 className="font-bold text-white text-4xl md:text-6xl stroke-black">
                Howdy, I&apos;m Andrew!
              </h1>
              <p className="text-black text-xl mt-8 md:mt-12">
                I am a community taught full stack developer. This site is to
                share what I am learning and hopefully help others along the
                way.
              </p>
              <PrimaryButton href="/notes" className="mt-12" text="Read More" />
            </div>
          </TwinSections.SectionOne>
          <TwinSections.SectionTwo>
            <div>
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
          </TwinSections.SectionTwo>
        </TwinSections>
        <CenteredSection>
          <h2 className="text-center font-bold text-black text-4xl stroke-white mb-12">
            Recent Notes
          </h2>
          <div className="flex flex-col items-center">
            {notesSlice.map(({ path, frontmatter }, index) => (
              <Link
                key={index}
                className={`${
                  index && "mt-4"
                } group relative w-1/2 min-w-[240px]`}
                href={`notes/${path!}`}
                title={frontmatter!.title}
              >
                <div className="absolute bg-black border-2 border-white rounded w-full h-full bottom-0" />
                <div className="flex bg-black border-2 border-white rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <PencilSquareIcon className="h-6 w-6 stroke-2 stroke-white" />
                  <h4 className="font-bold text-white truncate ml-2">
                    {frontmatter!.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </CenteredSection>
      </div>
    </div>
  );
};

export default HomePage;
