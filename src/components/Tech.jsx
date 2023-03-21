import { TechBalls } from "./canvas/index";
import { SectionFixer } from "../fixed/index";
import { technologies } from "../constants/index";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <motion.div
          variants={fadeIn()}
          className=" w-28 h-28"
          key={technology.icon}
        >
          <TechBalls icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionFixer(Tech, "");
