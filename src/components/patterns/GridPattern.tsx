import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const GridPattern = () => {
  const icons = [
    <ComputerDesktopIcon
      key="desktop"
      className="h-8 w-8 rotate-6 text-emerald-200"
    />,
    <DevicePhoneMobileIcon
      key="phone"
      className="h-8 w-8 rotate-12 text-emerald-200"
    />,
    <DeviceTabletIcon
      key="tablet"
      className="h-8 w-8 -rotate-45 text-emerald-200"
    />,
  ];
  const duplicatedIcons: JSX.Element[] = [];
  for (let i = 0; i < 24; i++) {
    duplicatedIcons.push(...icons);
  }

  return (
    <div className="absolute grid w-full grid-cols-4 place-items-center gap-20">
      {duplicatedIcons.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  );
};

export default GridPattern;
