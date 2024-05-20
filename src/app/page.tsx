import PrimaryButton from "@/components/PrimaryButton";
import ColorDivider from "@/components/ColorDivider";
import TopicCard from "@/components/TopicCard";
import Link from "next/link";
import { Note } from "@/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { getNotes } from "@/lib/actions/notes";
import { getGithubRepoFileContents } from "@/lib/actions/github";
import { getRandomElement } from "@/lib/utils/array";
import DeepThought from "@/components/DeepThought";
import Block from "@/components/Block";
import SvgIcon from "@/components/svg/SvgIcon";

type HomeProps = {
  notes: Note[];
};

// https://howdy.com/
// https://gumroad.com/
// https://salehmubashar.com/

export default async function HomePage() {
  const { notes } = await getNotes();

  // only get the first 5 notes
  const notesSlice = notes.slice(0, 5);

  const deepThoughts = await getGithubRepoFileContents({
    fileName: "deep-thoughts",
  });

  const states = await getGithubRepoFileContents({
    fileName: "states",
  });

  // !FIXME: This is not working
  console.log("states: ", states);

  const deepThought: { thought: string } = getRandomElement(deepThoughts);

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
        <section className="flex flex-col border-b-2 border-white md:flex-row">
          <div className="flex-1 bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
            <div className="max-w-xl mx-auto">
              <h1 className="font-bold text-white text-4xl md:text-6xl stroke-black">
                Howdy, I&apos;m Andrew!
              </h1>
              <p className="text-black text-xl mt-8 md:mt-12">
                I am a community taught Full Stack Developer. This site is to
                share what I am learning and hopefully help others along the
                way.
              </p>
              <PrimaryButton href="/notes" className="mt-12" text="Read More" />
            </div>
          </div>
          <div className="flex-1 bg-emerald-300 p-16 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-5">
              <div className="grid gap-5">
                <Block
                  color="yellow"
                  Icon={
                    <SvgIcon name="javascript" className="fill-yellow-500" />
                  }
                />
                <Block
                  color="cyan"
                  Icon={<SvgIcon name="css" className="fill-cyan-500" />}
                />
              </div>
              <div className="grid gap-5">
                <Block
                  color="pink"
                  Icon={<SvgIcon name="swift" className="fill-red-500" />}
                />
                <Block
                  color="cyan"
                  Icon={<SvgIcon name="react" className="fill-blue-500" />}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="border-b-2 border-white p-[6.5vw]">
          {<DeepThought deepThought={deepThought} />}
        </section>

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

          <div className="flex-1 bg-yellow-300 md:w-1/2 border-l-2 border-white p-[6.5vw]">
            <div className="flex flex-col">
              {notesSlice.map(({ path, frontmatter: { title } }, index) => (
                <Link
                  key={index}
                  className={`${index && "mt-4"} group relative`}
                  href={path}
                  title={title}
                >
                  <div
                    className={`absolute bg-white border-2 border-black rounded w-full h-full bottom-0`}
                  />
                  <div className="flex justify-between items-center bg-black border-2 border-black rounded p-4 transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <h4 className="font-bold text-white truncate max-w-[75%]">
                      {title}
                    </h4>
                    <PencilSquareIcon className="h-6 w-6 stroke-white min-w-max" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="h-12"></div>
        <ColorDivider className="w-full h-6" />
      </div>
    </div>
  );
}
