"use client";
import { useEffect, useState } from "react";
import HeaderHeading from "./HeaderHeading";
import Link from "next/link";
import { Page } from "@/types";
import { useRouter, usePathname } from "next/navigation";

type MobileHeaderProps = {
  pages: Page[];
};

const MobileHeader = ({ pages }: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const activePageTitle = pages.find((page) => page.href === pathname)?.title;

  useEffect(() => {
    setIsMenuOpen(false);
    console.log("isMenuOpen: ", isMenuOpen);
  }, [router]);

  return (
    <>
      <div className="flex fixed md:hidden justify-between items-center bg-black z-40 border-b-2 border-white-300 w-full px-[10%] py-6">
        <HeaderHeading />

        {/* Todo: Create Hamburger icon, animated to "X" on open  */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`fill-pink-300 h-8 w-8 transition ease-in-out ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            <path
              className="fill-pink-300 origin-top-left"
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z"
            />
            <path
              className="fill-cyan-300"
              fillRule="evenodd"
              d="M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75"
            />
            <path
              className="fill-yellow-300"
              fillRule="evenodd"
              d="M3 17.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden fixed z-30 top-0 left-0 bottom-[50%] right-0 flex-col bg-black border-x-2 border-b-2 border-white-300 rounded-b-lg px-[10%] pt-[82px] transition-all duration-300`}
      >
        <div className="flex flex-col justify-center items-center h-full">
          {pages.map(({ href, title }, index) => (
            <Link
              className={`group ${index ? "mt-6" : ""}`}
              key={index}
              href={href}
            >
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
