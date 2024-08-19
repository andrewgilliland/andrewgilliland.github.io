import { FC, ReactNode } from "react";

type TwinSectionsProps = {
  sectionOne: ReactNode;
  sectionTwo: ReactNode;
};

// ! Todo: add color props

const TwinSections: FC<TwinSectionsProps> = ({ sectionOne, sectionTwo }) => {
  return (
    <section className="flex flex-col border-b-2 border-white md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-pink-300 border-b-2 md:border-b-0 md:border-r-2 border-white p-[6.5vw]">
        {sectionOne}
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-cyan-300 p-[6.5vw]">
        {sectionTwo}
      </div>
    </section>
  );
};

export default TwinSections;
