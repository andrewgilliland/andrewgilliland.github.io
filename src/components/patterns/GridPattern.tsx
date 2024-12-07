import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

const GridPattern = () => {
  const icons = [
    <ComputerDesktopIcon key="desktop" className="h-8 w-8 rotate-6" />,
    <DevicePhoneMobileIcon key="phone" className="h-8 w-8 rotate-12" />,
    <DeviceTabletIcon key="tablet" className="h-8 w-8 -rotate-45" />,
    <CircleStackIcon key="circle" className="h-8 w-8 -rotate-12" />,
    <CodeBracketSquareIcon key="code" className="h-8 w-8 rotate-45" />,
  ];
  const duplicatedIcons: JSX.Element[] = [];
  for (let i = 0; i < 24; i++) {
    duplicatedIcons.push(...icons);
  }

  return (
    <div className="absolute grid w-full grid-cols-4 place-items-center gap-20 text-emerald-200">
      {duplicatedIcons.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  );
};

export default GridPattern;
