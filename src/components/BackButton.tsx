import Link from "next/link";

const BackButton = () => (
  <Link
    className="group flex items-center text-gray-400 hover:text-gray-200 w-fit transition-colors"
    href="/notes"
  >
    <svg
      className="transform rotate-180 mr-1 stroke-2 stroke-current fill-none"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
    >
      <g fillRule="evenodd">
        <path
          className="transition opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </g>
    </svg>
    <div className="ml-1">Go Back</div>
  </Link>
);

export default BackButton;
