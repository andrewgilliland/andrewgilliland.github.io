import Image from "next/image";
import { socialLinks } from "@/lib/utils/social";
import ExternalLink from "@/components/ExternalLink";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="max-w-3xl w-full mx-auto px-8 py-14 bg-emerald-300">
      <h1 className="font-bold text-white text-3xl md:text-4xl stroke-black md:mx-0">
        About
      </h1>

      <section className="mt-10">
        <div className="grid grid-cols-4 grid-rows-3 gap-6">
          <div className="relative col-span-2 row-span-1">
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

          <div className="relative col-span-1 row-span-1">
            <div className="absolute top-0 bg-black rounded-lg translate-x-1 translate-y-1 w-full h-full" />
            <div className="relative flex border-2 border-black rounded-lg w-full h-full">
              <div className="bg-yellow-300 rounded-l-lg h-full w-1/4" />
              <div className="bg-cyan-300 h-full w-1/4" />
              <div className="bg-pink-300 h-full w-1/4" />
              <div className="bg-emerald-300 rounded-r-lg h-full w-1/4" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 bg-black rounded-lg translate-x-1 translate-y-1 w-full h-full" />
            <div className="relative flex justify-center items-center bg-pink-300 border-2 border-black rounded-lg h-full">
              <Link className="group" href="/resume">
                <div className="font-semibold text-black text-lg">Resume</div>
                <div className="bg-black h-0.5 w-[0%] rounded-full group-hover:w-full transition-all" />
              </Link>
            </div>
          </div>

          <div className="relative col-span-2 row-span-2">
            <div className="absolute top-0 bg-black rounded-lg translate-x-1 translate-y-1 w-full h-full" />
            <div className="relative bg-yellow-300 border-2 border-black rounded-lg p-4 h-full">
              <p className="font-semibold text-black text-lg">
                I enjoy learning and using new mobile and web technologies. I
                currently work mainly with React Native and Swift to build
                mobile applications, but always enjoy implementing new
                technologies. In my spare time, I enjoy learning about fitness
                and nutrition, woodworking and am a music aficionado.
              </p>
            </div>
          </div>

          {socialLinks.map(({ title, Icon, href }, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-black border-2 border-white rounded-lg col-span-1 row-span-1"
            >
              <a className="group bg-black rounded-lg px-4 py-2" href={href}>
                <div className="font-semibold text-white text-lg">{title}</div>
                <div className="bg-pink-300 h-0.5 w-[0%] rounded-full group-hover:w-full transition-all" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
