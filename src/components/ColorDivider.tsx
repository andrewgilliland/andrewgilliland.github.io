import colors from "tailwindcss/colors";

const ColorDivider = () => {
  const pink300 = colors.pink["300"];
  const emerald300 = colors.emerald["300"];
  const cyan300 = colors.cyan["300"];
  const yellow300 = colors.yellow["300"];

  return (
    <div
      className="w-full h-2 rounded-full mt-8"
      style={{
        backgroundImage: `linear-gradient( -10deg, ${pink300}, ${pink300} 30%, ${emerald300} 30%, ${emerald300} 50%, ${yellow300} 50%, ${yellow300} 70%, ${cyan300} 70%, ${cyan300})`,
      }}
    />
  );
};

export default ColorDivider;
