import { ReactNode } from "react";

type BlockProps = {
  className?: string;
  children?: ReactNode;
  backgroundColor?: string;
  size?: string;
  theme?: "dark" | "light";
};

const Block = ({
  className,
  children,
  backgroundColor,
  size = "16",
  theme = "light",
}: BlockProps) => {
  const themeOptions = { dark: "white", light: "black" };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute flex justify-center items-center h-${size} w-${size} border-2 border-${themeOptions[theme]} rounded-lg right-1 bottom-1 ${backgroundColor}`}
      >
        {children}
      </div>
      <div
        className={`bg-${themeOptions[theme]} h-${size} w-${size} rounded-lg`}
      />
    </div>
  );
};

export default Block;
