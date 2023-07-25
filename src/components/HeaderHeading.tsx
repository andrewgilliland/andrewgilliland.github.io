import Link from "next/link";

const HeadHeading = () => {
  const pink300 = "#f9a8d4";
  const emerald300 = "#6ee7b7";
  const cyan300 = "#67e8f9";
  const yellow300 = "#fde047";

  return (
    <Link href="/">
      <h1
        className="font-bold text-2xl md:text-3xl header-title"
        style={{
          backgroundImage: `linear-gradient( to bottom right, ${pink300}, ${pink300} 30%, ${emerald300} 30%, ${emerald300} 50%, ${yellow300} 50%, ${yellow300} 70%, ${cyan300} 70%, ${cyan300})`,
        }}
      >
        Andrew Gilliland
      </h1>
    </Link>
  );
};

export default HeadHeading;
