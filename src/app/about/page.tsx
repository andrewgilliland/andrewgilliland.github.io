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
        <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-black bg-pink-300 p-4 text-black">
          <h3 className="rounded-lg border-2 border-black bg-white px-2 py-1 font-bold">
            Technologies
          </h3>
          <div className="flex list-disc gap-2 text-sm font-semibold">
            <ul className="min-w-fit">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Expo</li>
              <li>Node.js</li>
              <li>Bun</li>
            </ul>
            <ul className="">
              <li>AWS</li>
              <li>Vercel</li>
              <li>Fly.io</li>
              <li>Netlify</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>DynamoDB</li>
              <li>MongoDB</li>
            </ul>
            <ul className="">
              <li>Swift</li>
              <li>UIKit</li>
              <li>SwiftUI</li>
              <li>CoreML</li>
              <li>ARKit</li>
              <li>RealityKit</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
