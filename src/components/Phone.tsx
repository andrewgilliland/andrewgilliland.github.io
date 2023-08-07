import {
  currentDayOfWeek,
  currentMonthName,
  currentDay,
  currentTime,
  currentMinutes,
} from "../utils/date";

const Phone = () => {
  return (
    <div className="relative border-2 border-black bg-gradient-to-b from-blue-500 to-gray-200 w-[64px] h-[132px] rounded-[12px] opacity-100 top-0 transition-all">
      {/* <div className="absolute w-[64px] h-[132px] bg-black rounded-[12px]" /> */}
      <div className="absolute left-5 top-0.5 bg-black w-5 h-1.5 rounded-full">
        <div className="absolute left-[75%] top-[33%] bg-white w-0.5 h-0.5 rounded-full" />
      </div>

      <div className="absolute z-10 bg-gradient-to-b from-gray-900 to-gray-700 w-full h-full rounded-[10px] opacity-100 hover:opacity-0 transition duration-500" />

      <div className="absolute left-[14%] top-[10%] flex flex-col items-center font-sans">
        <div className="text-[4px]">{`${currentDayOfWeek}, ${currentMonthName} ${
          currentDay - 1
        }`}</div>
        <div className="text-[20px] leading-[20px]">{`${currentTime}:${currentMinutes}`}</div>
      </div>
      <div className="absolute left-[-4%] top-[18.5%] bg-black h-[4%] w-[1%]" />
      <div className="absolute left-[-4%] top-[26%] bg-black h-[7.5%] w-[1%]" />
      <div className="absolute left-[-4%] top-[36%] bg-black h-[7.5%] w-[1%]" />
      <div className="absolute right-[-4.5%] top-[30%] bg-black h-[12%] w-[1%]" />
    </div>
  );
};

export default Phone;
