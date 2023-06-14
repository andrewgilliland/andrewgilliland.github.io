import Link from "next/link";
import React from "react";

export default function Header() {
  const pages = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
    { href: "/about", title: "About" },
  ];

  const pink300 = "#f9a8d4";
  const emerald300 = "#6ee7b7";
  const cyan300 = "#67e8f9";
  const yellow300 = "#fde047";

  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-white-300 px-[10%] py-6">
        <div className="flex items-center">
          <Link href="/">
            <h1
              className="font-bold text-3xl header-title"
              style={{
                backgroundImage: `linear-gradient( to bottom right, ${pink300}, ${pink300} 30%, ${emerald300} 30%, ${emerald300} 50%, ${yellow300} 50%, ${yellow300} 70%, ${cyan300} 70%, ${cyan300})`,
              }}
            >
              Andrew Gilliland
            </h1>
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
