import {
  currentDayOfWeek,
  currentMonthName,
  currentDay,
  currentTime,
  currentMinutes,
} from "../lib/utils/date";

const Phone = () => {
  return (
    <div className="relative border-2 border-black bg-gray-700 w-[96px] h-[198px] rounded-[12px] opacity-100 transition-all">
      <div className="absolute  bg-black w-[96px] h-[198px] rounded-[12px] translate-x-0.5 translate-y-0.5" />

      <div className="absolute z-20 left-[36%] top-0.5 bg-black w-7 h-2 rounded-full">
        <div className="absolute left-[75%] top-[33%] bg-white w-0.5 h-0.5 rounded-full" />
      </div>

      <div className="absolute z-10 bg-gray-800 w-full h-full rounded-[10px] opacity-100 hover:opacity-0 transition duration-500" />

      <div className="absolute left-[14%] top-[10%] flex flex-col items-center font-sans">
        <div className="text-[4px]">{`${currentDayOfWeek}, ${currentMonthName} ${
          currentDay - 1
        }`}</div>
        <div className="text-[20px] leading-[20px]">{`${currentTime}:${currentMinutes}`}</div>
      </div>
      <div className="absolute left-[-4%] top-[18.5%] bg-black h-[4%] w-[2%]" />
      <div className="absolute left-[-4%] top-[26%] bg-black h-[7.5%] w-[2%]" />
      <div className="absolute left-[-4%] top-[36%] bg-black h-[7.5%] w-[2%]" />
    </div>
  );
};

export default Phone;
