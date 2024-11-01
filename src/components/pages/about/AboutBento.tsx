import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block";

const AboutBento = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 md:grid-rows-3 gap-6">
      {/* <div className="relative col-span-full md:col-span-2 row-span-1">
        <div className="absolute top-0 bg-black rounded-lg translate-x-1 translate-y-1 w-full h-full" />
        <div className="relative bg-cyan-300 border-2 border-black rounded-lg p-4">
          <div className="flex justify-between gap-4">
            <Image
              src="/andy-2.jpg"
              width={128}
              height={128}
              alt="Andrew Gilliland"
              className="rounded-lg border-2 border-black h-32 w-32 object-cover"
              priority
            />
            <div className="text-white text-sm flex flex-col justify-between">
              <div className="text-center bg-black rounded-lg border-2 border-white min-w-max px-4 py-4">
                Full Stack Developer
              </div>
              <a
                href="https://en.wikipedia.org/wiki/Bloomington,_Illinois"
                className="text-center bg-black rounded-lg border-2 border-white px-4 py-4"
              >
                <div>Bloomington, IL</div>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <Block
        backgroundColor="bg-yellow-300"
        size="full"
        className="col-span-full md:col-span-2 row-span-2"
      >
        <p className="font-semibold text-black text-lg m-4">
          I am a full stack developer with domain expertise in mobile
          development. I am proficient working with React Native and SwiftUI to
          build mobile applications, but am always learning and implementing new
          technologies. In my spare time, I enjoy learning about fitness,
          nutrition, woodworking, venturing into nature, and going to concerts.
        </p>
      </Block>

      <Block size="full" className="col-span-full md:col-span-1 row-span-1">
        <div className="flex w-full h-full">
          <div className="bg-yellow-300 rounded-l-md w-1/4" />
          <div className="bg-cyan-300 w-1/4" />
          <div className="bg-pink-300 w-1/4" />
          <div className="bg-emerald-300 rounded-r-md w-1/4" />
        </div>
      </Block>

      <Block
        backgroundColor="bg-pink-300"
        size="full"
        className="col-span-full md:col-span-1 row-span-1"
      >
        <Link className="group" href="/resume">
          <div className="font-semibold text-black text-lg">Resume</div>
          <div className="bg-black h-0.5 w-[0%] rounded-full group-hover:w-full transition-all" />
        </Link>
      </Block>
    </div>
  );
};

export default AboutBento;
