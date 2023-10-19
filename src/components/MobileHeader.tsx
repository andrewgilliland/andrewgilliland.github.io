import { useState } from "react";
import HeaderHeading from "./HeaderHeading";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Page } from "../../types";

type MobileHeaderProps = {
  pages: Page[];
};

const MobileHeader = ({ pages }: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex md:hidden justify-between items-center border-b-2 border-white-300 px-[10%] py-6">
        <HeaderHeading />

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Bars3Icon className="text-pink-300 h-8 w-8" />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "top-[50%]" : "top-[100%]"
        } md:hidden fixed z-10 left-0 bottom-0 right-0 flex-col items-center bg-black border-2 border-white-300 px-[10%] py-6 transition-all duration-300`}
      >
        <div className="flex flex-col items-end">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <XCircleIcon className="text-pink-300 h-10 w-10" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center  mt-16">
          {pages.map(({ href, title }, index) => (
            <Link
              className={`group ${index ? "mt-6" : ""}`}
              key={index}
              href={href}
            >
              <div className="text-3xl">{title}</div>
              <div className="bg-pink-300 h-px w-[0%] group-hover:w-full transition-all" />
            </Link>
          ))}
        </div>
        <div />
      </div>
    </>
  );
};

export default MobileHeader;
