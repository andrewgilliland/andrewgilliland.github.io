import Image from "next/image";
import { socialLinks } from "@/lib/utils/social";
import ExternalLink from "@/components/ExternalLink";
import Link from "next/link";
import Block from "@/components/Block";

const AboutBento = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-6">
      <div className="relative col-span-full md:col-span-2 row-span-1">
        <div className="absolute top-0 bg-black rounded-lg translate-x-1 translate-y-1 w-full h-full" />
        <div className="relative bg-cyan-300 border-2 border-black rounded-lg p-4">
          <div className="flex gap-4">
            <Image
              src="/andy-2.jpg"
              width={200}
              height={200}
              alt="Andrew Gilliland"
              className="bg-black rounded-lg border-2 border-black h-32 w-32 object-contain"
            />
            <div className="text-white text-sm flex flex-col justify-between">
              <div className="text-center bg-black rounded-lg border-2 border-white min-w-max px-4 py-4">
                Full Stack Developer
              </div>
              <div className="text-center bg-black rounded-lg border-2 border-white px-4 py-4">
                Bloomington, IL
              </div>
            </div>
          </div>
        </div>
      </div>

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
          nutrition, woodworking and venturing into nature or concerts.
        </p>
      </Block>

      {/* {socialLinks.map(({ title, Icon, href }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-black border-2 border-white rounded-lg col-span-1 row-span-1"
          >
            <a className="group bg-black rounded-lg px-4 py-2" href={href}>
              <div className="font-semibold text-white text-lg">{title}</div>
              <div className="bg-pink-300 h-0.5 w-[0%] rounded-full group-hover:w-full transition-all" />
            </a>
          </div>
        ))} */}
    </div>
  );
};

export default AboutBento;
