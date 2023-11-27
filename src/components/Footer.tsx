import GitHubIcon from "./svg/GitHubIcon";
import LinkedInIcon from "./svg/LinkedInIcon";
import TwitterIcon from "./svg/TwitterIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[10%] py-8">
      <div>ⓒ {new Date().getFullYear()} Andrew Gilliland</div>
      <div className="flex items-center gap-10 mt-6 lg:mt-0">
        <a href="https://github.com/andrewgilliland">
          <GitHubIcon className="fill-gray-300 h-5 w-5 transform transition hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/andrew-gilliland-a89b8919a/">
          <LinkedInIcon className="fill-gray-300 h-5 w-5 transform transition hover:scale-110" />
        </a>
        <a href="https://twitter.com/droidgilliland">
          <TwitterIcon className="fill-gray-300 h-5 w-5 transform transition hover:scale-110" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
