import CodeBlock from "@/components/CodeBlock";
import AboutBento from "@/components/pages/about/AboutBento";

const AboutPage = () => {
  return (
    <div className="max-w-3xl w-full mx-auto px-8 py-14 bg-emerald-300">
      <h1 className="font-bold text-white text-3xl md:text-4xl stroke-black md:mx-0">
        About
      </h1>

      <section className="mt-10">
        <CodeBlock />
        <div className="mt-24"></div>
        <AboutBento />
      </section>
    </div>
  );
};

export default AboutPage;
