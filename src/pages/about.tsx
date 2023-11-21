import GitHubIcon from "@/components/svg/GitHubIcon";
import LinkedInIcon from "@/components/svg/LinkedInIcon";
import TwitterIcon from "@/components/svg/TwitterIcon";

const About = () => (
  <div className="max-w-3xl w-full mx-auto mt-14 px-8">
    <h1 className="font-bold text-gray-100 text-4xl stroke-white md:mx-0">
      About
    </h1>
    <div className="mt-10">
      <p className="max-w-[30em] m-auto">
        Hi👋, I&apos;m Andrew. I&apos;m a mobile developer living Bloomington,
        Illinois. I am passionate about constantly learning and using new mobile
        and web technologies. I currently work mainly with React Native and
        Swift to build mobile applications, but always enjoy implementing new
        technologies. In my spare time, I enjoy learning about fitness and
        nutrition, woodworking and am a music aficionado.
      </p>
    </div>

    <div className="flex items-center gap-10 mt-12">
      <GitHubIcon className="fill-gray-300 h-8 w-8 transform transition hover:scale-105" />
      <LinkedInIcon className="fill-gray-300 h-8 w-8 transform transition hover:scale-105" />
      <TwitterIcon className="fill-gray-300 h-8 w-8 transform transition hover:scale-105" />
    </div>
  </div>
);

export default About;
