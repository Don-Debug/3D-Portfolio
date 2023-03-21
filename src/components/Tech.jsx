import { useState, useEffect } from "react";
import { TechBalls } from "./canvas/index";
import { technologies } from "../constants/index";
import { SectionFixer } from "../fixed/index";

const Tech = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const animationId = requestAnimationFrame(() => {
      setCurrentTech((prev) => prev + 1);
    });

    return () => cancelAnimationFrame(animationId);
  }, [currentTech]);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.slice(0, currentTech + 1).map((technology) => (
        <div className="w-28 h-28" key={technology.icon}>
          <TechBalls icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionFixer(Tech, "");
