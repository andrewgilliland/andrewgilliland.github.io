type BlockProps = {
  className?: string;
  color: string;
  Icon: JSX.Element;
};

const Block = ({ className, color, Icon }: BlockProps) => (
  <div className={`relative ${className} animate-rotate-reverse`}>
    <div
      className={`absolute flex justify-center items-center bg-${color}-100 h-16 w-16 rounded-lg right-1 bottom-1`}
    >
      {Icon}
    </div>
    <div className="bg-black h-16 w-16 rounded-lg" />
  </div>
);

export default Block;
