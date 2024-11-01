import { socialLinks } from "../lib/utils/social";
import Block from "./Block";

const Footer = () => (
  <footer className="flex flex-col lg:flex-row justify-center lg:justify-between items-center border-t-2 border-white px-[10%] py-8">
    <div>ⓒ {new Date().getFullYear()} Andrew Gilliland</div>
    <div className="flex items-center gap-10 mt-6 lg:mt-0">
      {socialLinks.map(({ Icon, href, color }, index) => (
        <a key={index} href={href}>
          <Block backgroundColor={`bg-${color}-500`} size="12" theme="dark">
            <Icon className="fill-white h-5 w-5" />
          </Block>
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
