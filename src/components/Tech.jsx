import { TechBalls } from "./canvas/index";
import { SectionFixer } from "../fixed/index";
import { technologies } from "../constants/index";

import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

const Tech = () => {
  return (
    <motion.div
      variants={zoomIn()}
      className=" flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className=" w-28 h-28" key={technology.icon}>
          <TechBalls icon={technology.icon} />
        </div>
      ))}
    </motion.div>
  );
};

export default SectionFixer(Tech, "");
