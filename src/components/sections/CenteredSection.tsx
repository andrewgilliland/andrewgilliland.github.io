import { FC, ReactNode } from "react";

type CenteredSectionProps = {
  children: ReactNode;
};

const CenteredSection: FC<CenteredSectionProps> = ({ children }) => {
  return (
    <section className="border-b-2 border-white p-[6.5vw] md:p-20">
      {children}
    </section>
  );
};

export default CenteredSection;
