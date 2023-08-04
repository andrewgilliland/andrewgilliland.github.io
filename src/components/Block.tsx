type BlockProps = {
  className?: string;
  color: string;
  Icon: any;
};

const Block = ({ className, color, Icon }: BlockProps) => {
  return (
    <div
      className={`relative ${className} transform-gpu transition group-hover:rotate-[-180deg] duration-1000`}
    >
      <div
        className={`absolute flex justify-center items-center bg-${color}-100 h-16 w-16 rounded-lg right-1 bottom-1`}
      >
        {Icon}
      </div>
      <div className="bg-black h-16 w-16 rounded-lg" />
    </div>
  );
};

export default Block;
