import Block from "@/components/Block";
import BrowserWindow from "@/components/BrowserWindow";
import Phone from "@/components/Phone";
import SvgIcon from "@/components/svg/SvgIcon";

const HomeBento = () => {
  return (
    <div className="flex-1 bg-emerald-300 p-16 flex justify-center items-center">
      <div className="grid place-items-center grid-cols-2 gap-5">
        <div className="grid gap-5">
          <Block
            color="yellow"
            Icon={<SvgIcon name="javascript" className="fill-yellow-500" />}
          />
          <Block
            color="cyan"
            Icon={<SvgIcon name="css" className="fill-cyan-500" />}
          />
        </div>
        <BrowserWindow />

        <Phone />
        <div className="grid gap-5">
          <Block
            color="emerald"
            Icon={<SvgIcon name="node" className="fill-emerald-500" />}
          />
          <Block
            color="cyan"
            Icon={<SvgIcon name="react" className="fill-blue-500" />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBento;
