import { ReactNode } from "react";

type BlockProps = {
  className?: string;
  children?: ReactNode;
  backgroundColor?: string;
};

const Block = ({ className, children, backgroundColor }: BlockProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute flex justify-center items-center h-[4.5rem] w-[4.5rem] border-2 border-black rounded-lg right-1 bottom-1 ${backgroundColor}`}
      >
        {children}
      </div>
      <div className="bg-black h-[4.5rem] w-[4.5rem] rounded-lg" />
    </div>
  );
};

export default Block;
