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
      <div className="flex justify-between items-center border-2 border-pink-400 m-4 px-[10%] py-6">
        <div>
          <h1 className="text-gray-50">Andrew Gilliland</h1>
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
