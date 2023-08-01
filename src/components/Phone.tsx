import Image from "next/image";

const Phone = () => {
  return (
    <div className="relative mr-24">
      <Image
        className=""
        src="/iphone-14-pro.svg"
        width={65}
        height={150}
        alt="iPhone 14 Pro"
      />

      <div className="absolute border-2 border-black bg-gradient-to-b from-blue-500 to-gray-200 w-[64px] h-[132px] rounded-[12px] opacity-100 top-0">
        <div className="absolute left-5 top-0.5 bg-black w-5 h-1.5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Phone;
