import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const pages = [
    { href: "/", title: "Home" },
    // { href: "/tools", title: "Tools" },
    { href: "/notes", title: "Notes" },
    { href: "/about", title: "About" },
  ];

  return (
    <div className="bg-black">
      <MobileNavbar pages={pages} />
      <DesktopNavbar pages={pages} />
    </div>
  );
};

export default Navbar;
