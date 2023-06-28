import { FireIcon } from "@heroicons/react/20/solid";

type BlockProps = {
  color: string;
  Icon: any;
};

const Block = ({ color, Icon }: BlockProps) => {
  return (
    <div className="relative">
      <div
        className={`absolute flex justify-center items-center bg-${color}-100 h-16 w-16 rounded-lg right-1 bottom-1`}
      >
        <Icon className={`h-10 w-10 text-${color}-300`} />
      </div>
      <div className="bg-black h-16 w-16 rounded-lg" />
    </div>
  );
};

export default Block;
