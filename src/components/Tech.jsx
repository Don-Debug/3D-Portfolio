import { TechBalls } from "./canvas/index";
import { SectionFixer } from "../fixed/index";
import { technologies } from "../constants/index";

import LazyLoad from "react-lazyload";

const Tech = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className=" w-28 h-28" key={technology.icon}>
          <LazyLoad offset={100}>
            <TechBalls icon={technology.icon} />
          </LazyLoad>
        </div>
      ))}
    </div>
  );
};

export default SectionFixer(Tech, "");
