type PrimaryButtonProps = {
  className?: string;
  onClick?: () => void;
  href?: string;
  text: string;
};

const PrimaryButton = ({
  className,
  onClick,
  href,
  text,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      data-cy="primary-button"
      className={`group relative ${className}`}
    >
      <a href={href}>
        <div className="absolute bg-cyan-400 border-2 border-black w-full h-full rounded bottom-0 transform-gpu transition group-hover:translate-x-2 group-hover:translate-y-2 group-active:translate-x-0 group-active:translate-y-0" />
        <div className="absolute bg-red-400 border-2 border-black w-full h-full rounded bottom-0" />
        <div className="min-w-max md:text-2xl bg-black rounded px-12 md:px-24 py-4 transform-gpu transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-active:translate-x-0 group-active:translate-y-0">
          {text}
        </div>
      </a>
    </button>
  );
};

export default PrimaryButton;
