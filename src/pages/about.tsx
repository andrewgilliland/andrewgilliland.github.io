import Image from "next/image";
import { socialLinks } from "@/lib/utils/social";
import ExternalLink from "@/components/ExternalLink";
import BlackMage from "@/components/svg/pixel-art/BlackMage";
import RedMage from "@/components/svg/pixel-art/RedMage";
import Fighter from "@/components/svg/pixel-art/Fighter";
import WhiteMage from "@/components/svg/pixel-art/WhiteMage";
import Thief from "@/components/svg/pixel-art/Thief";
import Monk from "@/components/svg/pixel-art/Monk";
import Garland from "@/components/svg/pixel-art/Garland";

const AboutPage = () => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14 px-8">
      <h1 className="font-bold text-gray-100 text-3xl md:text-4xl stroke-white md:mx-0">
        About
      </h1>

      <section className="mt-10">
        <div className="grid grid-cols-3 grid-rows-3 bg-emerald-300 border-2 border-white rounded-lg gap-6 p-6">
          <div className="flex flex-col items-center  bg-black border-2 border-white rounded-lg col-span-1 row-span-2 p-4">
            <Image
              src="/andy-2.jpg"
              width={200}
              height={200}
              alt="Andrew Gilliland"
              className="border-2 border-white rounded-lg mb-2"
            />

            <ExternalLink
              href="https://andrewgilliland.notion.site/Resume-e726ff3b64e841de86ce23de5a4ef0af?pvs=4"
              text="Resume"
            />
          </div>
          <div className="bg-black border-2 border-white rounded-lg col-span-2 row-span-2 p-4">
            <p className="text-lg">
              Hi, I&apos;m Andrew. I&apos;m a mobile developer living
              Bloomington, Illinois. I am passionate about constantly learning
              and using new mobile and web technologies. I currently work mainly
              with React Native and Swift to build mobile applications, but
              always enjoy implementing new technologies. In my spare time, I
              enjoy learning about fitness and nutrition, woodworking and am a
              music aficionado.
            </p>
          </div>
          <div className="bg-black border-2 border-white rounded-lg col-span-1 row-span-1"></div>
          <div className="bg-black border-2 border-white rounded-lg col-span-1 row-span-1"></div>
          <div className="bg-black border-2 border-white rounded-lg col-span-1 row-span-1"></div>
        </div>
      </section>

      <section className="font-pixel text-white border-2 border-white mt-12 p-10">
        <h2 id="pixel-art" className="font-semibold text-3xl">
          Pixel Art
        </h2>
        <div>
          <p className="mt-4 text-lg">
            I have always been a fan of pixel art and have recently started
            creating my own. I have been using Figma to create my art and have
            been learning the ins and outs of creating pixel art. I have been
            creating a lot of Final Fantasy inspired art and have been enjoying
            the process. I am always looking for new ideas and inspiration for
            my art.
          </p>
          <div className="mt-8">
            <h3 className="font-semibold text-2xl">Final Fantasy</h3>
            <div className="flex justify-between gap-4 mt-4">
              <Garland />
              <div>
                <Fighter />
                <BlackMage />
                <WhiteMage />
                <Thief />
                <RedMage />
                <Monk />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-start mt-10">
        {socialLinks.map(({ title, href }, index) => (
          <a key={index} className={`group ${index ? "mt-6" : ""}`} href={href}>
            <div className="font-semibold text-cyan-300 text-xl">{title}</div>
            <div className="bg-cyan-300 h-0.5 w-[0%] rounded-full group-hover:w-full transition-all" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
