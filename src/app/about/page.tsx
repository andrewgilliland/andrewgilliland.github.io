import Block from "@/components/Block";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="max-w-3xl w-full mx-auto px-8 py-14 bg-emerald-300">
      <h1 className="font-bold text-white text-3xl md:text-4xl stroke-black md:mx-0">
        About
      </h1>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="grid bg-cyan-300 rounded-lg overflow-hidden border-2 border-black p-16 sm:px-16">
          <Image
            src="/andy-config-2.jpg"
            width={800}
            height={500}
            alt="Andrew Gilliland"
            className="rounded-lg border-2 border-black self-center"
          />
        </div>
        <div className="grid gap-4 justify-items-center font-semibold text-black text-base md:text-lg bg-yellow-300 border-2 border-black rounded-lg p-4">
          <p>
            Hola, I&apos;m Andrew. I am a full stack developer with domain
            expertise in mobile development. I am proficient working with React
            Native and SwiftUI to build mobile applications, but am always
            learning and implementing new technologies. In my spare time, I
            enjoy learning about fitness, nutrition, woodworking, venturing into
            nature, and going to concerts.
          </p>
          <Link href="/resume">
            <Block
              backgroundColor="bg-pink-500"
              height="12"
              width="24"
              theme="light"
            >
              Resume
            </Block>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
