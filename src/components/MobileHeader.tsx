"use client";
import { useEffect, useState } from "react";
import HeaderHeading from "./HeaderHeading";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/20/solid";
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
  }, [router]);

  return (
    <>
      <div className="flex fixed md:hidden justify-between items-center bg-black z-40 border-b-2 border-white-300 w-full px-[10%] py-6">
        <HeaderHeading />

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Bars3Icon
            className={`text-pink-300 h-8 w-8 transition ease-in-out ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden fixed z-30 top-0 left-0 bottom-[50%] right-0 flex-col items-center bg-black border-x-2 border-b-2 border-white-300 px-[10%] py-[82px] transition-all duration-300`}
      >
        <div className="flex flex-col justify-center items-center mt-16">
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
