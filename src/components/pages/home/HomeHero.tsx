"use client";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import ArticlesSection from "./ArticlesSection";
import TopicCard from "@/components/TopicCard";

const HomeHero = () => {
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
    <section className="flex flex-col border-b-2 border-white md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
        <div className="max-w-xl mx-auto">
          <h1 className="font-bold text-white text-4xl md:text-6xl stroke-black">
            Howdy, I&apos;m Andrew!
          </h1>
          <p className="text-black text-xl mt-8 md:mt-12">
            I am a community taught full stack developer. This site is to share
            what I am learning and hopefully help others along the way.
          </p>
          <PrimaryButton
            onClick={() => {}}
            href="/notes"
            className="mt-12"
            text="Read More"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-cyan-300 p-[6.5vw]">
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
    </section>
  );
};

export default HomeHero;
