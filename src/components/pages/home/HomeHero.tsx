"use client";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import ArticlesSection from "./ArticlesSection";

const HomeHero = () => {
  return (
    <section className="flex flex-col border-b-2 border-white md:flex-row">
      <div className="flex-1 bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
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
      <ArticlesSection />
    </section>
  );
};

export default HomeHero;
