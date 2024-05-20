type DeepThoughtProps = {
  deepThought: {
    thought: string;
  };
};

const DeepThought = ({ deepThought }: DeepThoughtProps) => {
  return (
    <div>
      {deepThought && (
        <div className="grid gap-12 max-w-lg mx-auto my-16">
          <h2 className="text-white text-3xl">{`"${deepThought.thought}"`}</h2>
          <div>
            <strong className="font-semibold text-xl">
              Deep Thoughts by Jack Handey
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepThought;
