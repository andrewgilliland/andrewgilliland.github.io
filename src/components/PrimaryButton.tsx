type PrimaryButtonProps = {
  className?: string;
  href?: string;
  text: string;
};

const PrimaryButton = ({ className, href, text }: PrimaryButtonProps) => {
  return (
    <button className={`group relative ${className}`}>
      <a href={href}>
        <div className="absolute bg-cyan-400 border-2 border-black w-full h-full rounded bottom-0 transform-gpu transition group-hover:translate-x-2 group-hover:translate-y-2" />
        <div className="absolute bg-red-400 border-2 border-black w-full h-full rounded bottom-0" />
        <div className="text-2xl bg-black rounded px-24 py-4 transform-gpu transition group-hover:-translate-x-2 group-hover:-translate-y-2">
          {text}
        </div>
      </a>
    </button>
  );
};

export default PrimaryButton;
