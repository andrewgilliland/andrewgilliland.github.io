import { socialLinks } from "@/lib/utils/social";
import { ClientMap } from "@/components/d3/Map";

const About = () => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14 px-8">
      <h1 className="font-bold text-gray-100 text-3xl md:text-4xl stroke-white md:mx-0">
        About
      </h1>

      <section className="mt-10">
        <div className="grid grid-cols-3 grid-rows-3 bg-emerald-300 border-2 border-white rounded gap-4 p-4">
          <div className="bg-black border-2 border-white rounded col-span-1 row-span-2"></div>
          <div className="bg-black border-2 border-white rounded col-span-2 row-span-2 p-4">
            <p className="text-lg">
              I&apos;m Andrew. I&apos;m a mobile developer living Bloomington,
              Illinois. I am passionate about constantly learning and using new
              mobile and web technologies. I currently work mainly with React
              Native and Swift to build mobile applications, but always enjoy
              implementing new technologies. In my spare time, I enjoy learning
              about fitness and nutrition, woodworking and am a music
              aficionado.
            </p>
          </div>
          <div className="bg-black border-2 border-white rounded col-span-1 row-span-1"></div>
          <div className="bg-black border-2 border-white rounded col-span-1 row-span-1"></div>
          <div className="bg-black border-2 border-white rounded col-span-1 row-span-1"></div>
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

export default About;
