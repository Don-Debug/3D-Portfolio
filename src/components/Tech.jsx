import { TechBalls } from "./canvas/index";
import { SectionFixer } from "../fixed/index";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className=" w-28 h-28" key={technology.icon}>
          <TechBalls icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionFixer(Tech, "");
