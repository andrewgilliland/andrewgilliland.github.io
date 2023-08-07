import {
  PaintBrushIcon,
  WindowIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";

const AppWindow = () => {
  return (
    <div className="relative h-32 w-48">
      <div className="absolute bg-black h-32 w-48 border-2 border-black rounded transform translate-x-1 translate-y-1" />
      <div className="absolute bg-pink-300 h-32 w-48 border-2 border-black rounded">
        <div className="flex justify-end bg-black border-b-2 border-black p-1">
          <div className="flex gap-1">
            {[
              { color: "cyan", Icon: PaintBrushIcon },
              { color: "yellow", Icon: WindowIcon },
              { color: "pink", Icon: Cog6ToothIcon },
            ].map(({ color, Icon }, index) => (
              <div key={index} className="h-3 w-3 rounded-full">
                <Icon className={`text-${color}-400`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWindow;
