const About = () => {
  const socialLinks = [
    { title: "GitHub", href: "https://github.com/andrewgilliland" },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/andrew-gilliland-a89b8919a/",
    },
    { title: "Twitter", href: "https://twitter.com/droidgilliland" },
  ];

  return (
    <div className="max-w-3xl w-full mx-auto mt-14 px-8">
      <h1 className="font-bold text-gray-100 text-4xl stroke-white md:mx-0">
        About
      </h1>

      <p className="text-xl mx-auto mt-10">
        Hi👋, I&apos;m Andrew. I&apos;m a mobile developer living Bloomington,
        Illinois. I am passionate about constantly learning and using new mobile
        and web technologies. I currently work mainly with React Native and
        Swift to build mobile applications, but always enjoy implementing new
        technologies. In my spare time, I enjoy learning about fitness and
        nutrition, woodworking and am a music aficionado.
      </p>

      <div className="flex flex-col items-start mt-10">
        {socialLinks.map(({ title, href }, index) => (
          <a key={index} className={`group ${index ? "mt-6" : ""}`} href={href}>
            <div className="text-cyan-300 text-xl">{title}</div>
            <div className="bg-cyan-300 h-px w-[0%] group-hover:w-full transition-all" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
