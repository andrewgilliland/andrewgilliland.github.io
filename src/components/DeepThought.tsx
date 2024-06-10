import { getGithubRepoFileContents } from "@/lib/actions/github";
import { getRandomElement } from "@/lib/utils/array";

const DeepThought = async () => {
  const deepThoughts = await getGithubRepoFileContents({
    fileName: "deep-thoughts",
  });

  const { thought }: { thought: string } = getRandomElement(deepThoughts);

  return (
    <div>
      {thought && (
        <div className="grid gap-12 max-w-lg mx-auto md:my-16 p-[6.5vw]">
          <h2 className="text-white text-xl md:text-3xl">{`"${thought}"`}</h2>
          <div>
            <strong className="font-semibold text-md md:text-xl">
              Deep Thoughts by Jack Handey
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepThought;
