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
    <div className={`relative group ${className}`}>
      <div
        className={`absolute top-0 bg-${themeOptions[theme]} h-${size} w-${size} translate-x-1 translate-y-1 rounded-lg`}
      />
      <div
        className={`relative flex justify-center items-center h-${size} w-${size} border-2 border-${themeOptions[theme]} rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 transition-transform ${backgroundColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
