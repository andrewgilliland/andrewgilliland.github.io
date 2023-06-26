import { useState } from "react";
import Image from "next/image";

const GameBoy = () => {
  const [isOn, setIsOn] = useState(false);
  const [start, setStart] = useState(false);

  return (
    <div className="flex">
      <Image
        className="opacity-50"
        src="/gameboy.jpeg"
        width={200}
        height={200}
        alt="Game Boy"
      />
      <div className="absolute w-[200px] h-[328px] p-[2px] opacity-100">
        <button
          onClick={() => setIsOn(!isOn)}
          className={`absolute ${
            isOn && "-translate-x-1"
          } bg-blue-500 border border-blue-500 h-1 w-3 rounded-t-sm bottom-[324px] right-[160px] transition`}
        />
        <div className="border border-purple-500 w-[194px] h-[322px] rounded-t-md rounded-bl-md rounded-br-[40px]">
          <div className="border-b border-purple-500 h-4 rounded-t-md px-3.5">
            <div className="border-l border-r border-purple-500 h-full" />
          </div>
          <div className="absolute border border-yellow-500 w-[168px] h-[128px] bottom-[172px] right-[16px] rounded-t-lg rounded-bl-lg rounded-br-[30px]">
            <div
              className={`absolute ${
                isOn ? "bg-red-500" : "bg-black"
              }  border border-red-500 h-1.5 w-1.5 rounded-md bottom-[75px] right-[150px] transition-colors`}
            />
            <div className="absolute border border-orange-500 w-[104px] h-[94px] rounded-sm bottom-4 right-[30px]">
              <div
                className={`bg-green-900 ${
                  isOn ? "opacity-100" : "opacity-0"
                } w-full h-full transition`}
              ></div>
            </div>
          </div>
          <div className="flex justify-center items-center font-black stroke-blue-500 text-[110px] absolute h-[50px] w-[50px] bottom-[80px] left-[15px]">
            &#43;
          </div>
          <div className="flex flex-col items-center absolute bottom-[47px] right-[114px] -rotate-[25deg]">
            <div className="border border-pink-500 h-[8px] w-[25px] rounded-full" />
            <div className="text-pink-500 text-[6px]">SELECT</div>
          </div>
          <div className="flex flex-col items-center absolute bottom-[47px] right-[81px] -rotate-[25deg]">
            <button className="border border-pink-500 h-[8px] w-[25px] rounded-full" />
            <div className="text-pink-500 text-[6px]">START</div>
          </div>
          <div className="flex flex-col items-center absolute bottom-[76px] right-[46px] -rotate-[25deg]">
            <div className="border border-green-500 h-[26px] w-[26px] rounded-full" />
            <div className="text-green-500 text-[6px] mt-1">B</div>
          </div>
          <div className="flex flex-col items-center absolute bottom-[92px] right-[15px] -rotate-[25deg]">
            <div className="border border-green-500 h-[26px] w-[26px] rounded-full" />
            <div className="text-green-500 text-[6px] mt-1">A</div>
          </div>
          <div className="absolute flex justify-between w-[75px] h-[40px] bottom-[15px] right-[5px] -rotate-[28deg] px-1">
            {[...Array(6)].map((_, i) => (
              <div className="border border-gray-700 h-[32px] w-[6px] rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameBoy;
