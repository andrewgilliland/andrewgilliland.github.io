import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  const pages = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
    { href: "/about", title: "About" },
  ];

  return (
    <>
      <MobileHeader pages={pages} />
      <DesktopHeader pages={pages} />
    </>
  );
};

export default Header;
