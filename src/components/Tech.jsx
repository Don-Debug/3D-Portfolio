import { useState, useEffect } from "react";
import { TechBalls } from "./canvas/index";
import { technologies } from "../constants/index";
import { SectionFixer } from "../fixed/index";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentTech((prev) => prev + 1);
    }, 1000); // adjust delay time as per your preference

    return () => clearTimeout(intervalId);
  }, [currentTech]);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.slice(0, currentTech + 1).map((technology) => (
        <motion.div
          variants={fadeIn()}
          className="w-28 h-28"
          key={technology.icon}
        >
          <TechBalls icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionFixer(Tech, "");
