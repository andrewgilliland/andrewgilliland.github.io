import Battle from "@/components/Battle";
import MegaMan from "@/components/svg/pixel-art/MegaMan";
import { getGithubRepoFileContents } from "@/lib/actions/github";
import colors from "tailwindcss/colors";

const AboutPage = async () => {
  const deepThoughts = await getGithubRepoFileContents({
    username: "andrewgilliland",
    repoName: "JSON",
    fileName: "deep-thoughts.json",
  });

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

      <section className="py-20">
        <div className="grid grid-cols-2 grid-rows-2 border-2 border-white rounded-lg overflow-hidden w-1/2">
          {[
            {
              backgroundColor: "pink",
              sprite: {
                outline: colors.blue[900],
                primary: colors.blue[600],
                secondary: colors.cyan[300],
              },
            },
            {
              backgroundColor: "emerald",
              sprite: {
                outline: colors.yellow[800],
                primary: colors.yellow[500],
                secondary: colors.amber[200],
              },
            },
            {
              backgroundColor: "cyan",
              sprite: {
                outline: colors.purple[900],
                primary: colors.purple[700],
                secondary: colors.violet[400],
              },
            },
            {
              backgroundColor: "yellow",
              sprite: {
                outline: colors.orange[900],
                primary: colors.orange[600],
                secondary: colors.amber[300],
              },
            },
          ].map(
            ({ backgroundColor, sprite: { outline, primary, secondary } }) => (
              <div
                key={backgroundColor}
                className={`grid place-items-center bg-${backgroundColor}-300 p-12`}
              >
                <MegaMan
                  outlineColor={outline}
                  primaryColor={primary}
                  secondaryColor={secondary}
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
