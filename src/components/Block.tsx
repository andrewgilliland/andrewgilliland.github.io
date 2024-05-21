type BlockProps = {
  className?: string;
  color: string;
  Icon: JSX.Element;
};

const Block = ({ className, color, Icon }: BlockProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute flex justify-center items-center bg-${color}-100 h-[4.5rem] w-[4.5rem] border-2 border-black rounded-lg right-1 bottom-1`}
      >
        {Icon}
      </div>
      <div className="bg-black h-[4.5rem] w-[4.5rem] rounded-lg" />
    </div>
  );
};

export default Block;
