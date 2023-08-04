import Block from "./Block";
import SvgIcon from "./SvgIcon";

const Blocks = () => (
  <div className="relative grid grid-rows-2 grid-flow-col gap-6 group transform-gpu hover:rotate-[360deg] transition duration-[3000ms]">
    <div className="absolute h-28 w-28 border-2 border-black rounded-full left-0 right-0 top-0 bottom-0 ml-auto mr-auto mt-auto mb-auto " />
    {[
      {
        color: "yellow",
        icon: (
          <SvgIcon name="javascript" className="fill-yellow-300 h-10 w-10" />
        ),
      },
      {
        color: "cyan",
        icon: <SvgIcon name="react" className="fill-cyan-300 h-10 w-10" />,
      },
      {
        color: "pink",
        icon: <SvgIcon name="swift" className="fill-pink-300 h-10 w-10" />,
      },
      {
        color: "emerald",
        icon: <SvgIcon name="css" className="fill-emerald-300 h-10 w-10" />,
      },
    ].map(({ color, icon }, index) => (
      <Block key={index} color={color} Icon={icon} />
    ))}
  </div>
);

export default Blocks;
