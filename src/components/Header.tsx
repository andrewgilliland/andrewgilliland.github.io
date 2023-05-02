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
      <div className="flex justify-between items-center border-2 border-pink-300 m-4 px-[10%] py-6">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl text-pink-100 hover:scale-105 transition">
              Andrew Gilliland
            </h1>
          </Link>
        </div>
        <div className="flex">
          <div className="h-10 w-12 bg-cyan-300 rounded-l-md" />
          <div className="h-10 w-12 bg-pink-300" />
          <div className="h-10 w-12 bg-yellow-300 rounded-r-md" />
        </div>
        <div className="flex">
          {pages.map(({ href, title }, index) => (
            <Link className="mr-4" key={index} href={href}>
              <div className="hover:scale-110 transition">{title}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
