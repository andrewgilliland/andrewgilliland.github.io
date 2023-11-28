import { socialLinks } from "../utils/social";

const Footer = () => (
  <footer className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[10%] py-8">
    <div>ⓒ {new Date().getFullYear()} Andrew Gilliland</div>
    <div className="flex items-center gap-10 mt-6 lg:mt-0">
      {socialLinks.map(({ Icon, href }, index) => (
        <a
          className="flex justify-center items-center h-10 w-10 bg-gray-900 rounded-full transform transition hover:scale-110"
          key={index}
          href={href}
        >
          <Icon className="fill-gray-300 h-5 w-5" />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
