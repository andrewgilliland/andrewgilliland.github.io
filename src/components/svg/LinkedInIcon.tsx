type LinkedInIconProps = {
  className: string;
};

const LinkedInIcon = ({ className }: LinkedInIconProps) => (
  <svg
    className={`${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 18"
  >
    <path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
  </svg>
);

export default LinkedInIcon;
