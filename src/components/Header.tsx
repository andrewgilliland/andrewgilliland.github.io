import Link from "next/link";
import React from "react";

export default function Header() {
  const pages = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
    { href: "/about", title: "About" },
  ];

  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-white-300 px-[10%] py-6">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl text-pink-100">Andrew Gilliland</h1>
          </Link>
        </div>

        <div className="flex">
          {pages.map(({ href, title }, index) => (
            <Link className="group mr-4" key={index} href={href}>
              <div className="">{title}</div>
              <div className=" bg-pink-300 h-px w-[0%] group-hover:w-full transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
