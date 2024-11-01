"use client";
import { useEffect, useState } from "react";
import HeaderHeading from "./HeaderHeading";
import Link from "next/link";
import { Page } from "@/types";
import { usePathname } from "next/navigation";
import OpenClose from "./svg/OpenClose";

type MobileHeaderProps = {
  pages: Page[];
};

const MobileHeader = ({ pages }: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const activePageTitle = pages.find((page) => page.href === pathname)?.title;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="flex fixed md:hidden justify-between items-center bg-black z-40 border-b-2 border-white-300 w-full px-[10%] py-6">
        <HeaderHeading />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <OpenClose isOpen={isMenuOpen} />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden fixed z-30 top-0 left-0 right-0 flex-col bg-black border-x-2 border-b-2 border-white-300 rounded-b-lg px-[10%] pt-[82px] transition-all duration-300`}
      >
        <div className="flex flex-col items-center gap-10 h-full my-10">
          {pages.map(({ href, title }, index) => (
            <Link className="group" key={index} href={href}>
              <div
                className={`text-3xl px-2 py-1 rounded-md ${
                  activePageTitle === title
                    ? "font-semibold bg-pink-300 text-black"
                    : "text-white"
                }`}
              >
                {title}
              </div>
              <div
                className={`bg-pink-300 h-0.5 w-[0%] ${
                  activePageTitle !== title && "group-hover:w-full"
                } transition-all`}
              />
            </Link>
          ))}
        </div>
        <div />
      </div>
    </>
  );
};

export default MobileHeader;
