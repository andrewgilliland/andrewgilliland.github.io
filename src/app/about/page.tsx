import Block from "@/components/Block";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl bg-emerald-300 px-8 py-14">
      <h1 className="stroke-black text-3xl font-bold text-white md:mx-0 md:text-4xl">
        About
      </h1>

      <section className="mt-10 grid grid-rows-3 gap-4 sm:grid-cols-2 sm:gap-10">
        <div className="grid justify-items-center overflow-hidden rounded-lg border-2 border-black bg-cyan-300 px-16 py-4">
          <div className="relative overflow-hidden">
            <Image
              src="/andy-config-2.jpg"
              width={800}
              height={500}
              alt="Andrew Gilliland"
              className="h-40 w-40 rounded-lg border-2 border-black object-cover object-left-top"
            />
          </div>
          <Link className="mt-4" href="/resume">
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
        <div className="grid justify-items-center gap-4 rounded-lg border-2 border-black bg-yellow-300 p-4 text-base font-semibold text-black">
          <p>
            I&apos;m a self-taught full stack developer who loves building tools
            to solve business problems. I believe development is a team sport
            and thrive in collaborative environments that encourage creative
            growth—after all, the best ideas can come from anyone. My mission is
            to help teams create exceptional web and mobile applications that
            reach their full potential.
          </p>
        </div>
        <div className="grid justify-items-center gap-4 rounded-lg border-2 border-black bg-yellow-300 p-4 text-base font-semibold text-black">
          <p>
            I thrive on building engaging and interactive user experiences and
            am comfortable working in both front-end and back-end development.
            For mobile applications, I prefer working with TypeScript, React
            Native, and Expo. For web applications, my go-to tools are
            TypeScript, React, and Next.js. I&apos;m always eager to learn and
            work with new technologies.
          </p>
        </div>
        <div className="grid justify-items-center gap-4 rounded-lg border-2 border-black bg-yellow-300 p-4 text-base font-semibold text-black">
          <p>
            Outside of programming, I love fitness, exercise, and nutrition.
            Having worked as a personal trainer for several years, I thoroughly
            enjoy sharing my knowledge with others. My other interests include
            woodworking, reading, drawing, grilling, and tackling various home
            projects. When it&apos;s time to relax, you&apos;ll find me hanging
            out with my dog Hank, my cats Gus and Bernie, while enjoying some
            Yacht Rock.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
