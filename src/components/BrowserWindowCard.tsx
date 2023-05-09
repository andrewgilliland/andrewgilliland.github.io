import { StarIcon } from "@heroicons/react/20/solid";

type BrowserWindowCardProps = {
  color: String;
  Icon: any;
};

const BrowserWindowCard = ({ color, Icon }: BrowserWindowCardProps) => {
  return (
    <div className="relative flex-1 h-12">
      <div className="absolute bg-black w-[42px] h-12 rounded" />
      <div className="absolute border-[1.5px] border-black rounded w-[42px] h-12 overflow-hidden transform-gpu transition hover:-translate-x-0.5 hover:-translate-y-0.5">
        <div className="flex justify-center items-center bg-gray-300 border-b-[1.5px] border-black h-5">
          <div
            className={`flex justify-center items-center bg-${color}-500 h-4 w-4 border border-black rounded-full p-0.5`}
          >
            <Icon className={`text-${color}-100 h-3 w-3`} />
          </div>
        </div>
        <div className="bg-white h-7 p-1">
          <div className="bg-gray-300 h-0.5 rounded-full" />
          <div className="bg-gray-300 h-0.5 w-2/3 rounded-full mt-1" />
          <div className="flex justify-between items-center mt-1">
            <StarIcon className="text-yellow-400 h-1.5 w-1.5" />
            <div className="bg-pink-300 h-1 w-3 border border-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserWindowCard;
