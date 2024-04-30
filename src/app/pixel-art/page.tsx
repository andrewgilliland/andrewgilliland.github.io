import Battle from "@/components/Battle";

const AboutPage = () => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-14 px-8">
      <section className="font-pixel text-white border-2 border-white my-20 p-10">
        <h1 id="pixel-art" className="font-semibold text-3xl">
          Pixel Art
        </h1>
        <div>
          <p className="mt-4 text-lg">
            I have always been a fan of pixel art and have recently started
            creating my own. I have been using Figma to create my art and have
            been learning the ins and outs of creating pixel art. I have been
            creating a lot of Final Fantasy inspired art and have been enjoying
            the process. I am always looking for new ideas and inspiration for
            my art.
          </p>
          <Battle />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
