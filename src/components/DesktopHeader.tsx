import { Page } from "../types";
import Container from "./Container";
import HeaderHeading from "./HeaderHeading";
import Link from "next/link";

type DesktopHeaderProps = {
  pages: Page[];
};

const DesktopHeader = ({ pages }: DesktopHeaderProps) => (
  <div className="hidden md:block border-b-2 border-white px-[10%] py-6">
    <Container>
      <div className="md:flex justify-between items-center">
        <HeaderHeading />

        <div className="flex">
          {pages.map(({ href, title }, index: number) => (
            <Link className="group mr-4" key={index} href={href}>
              <div className="text-white">{title}</div>
              <div className="bg-pink-300 h-[2px] w-[0%] rounded-full group-hover:w-full transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  </div>
);

export default DesktopHeader;
