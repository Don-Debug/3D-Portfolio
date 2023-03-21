import { motion } from "framer-motion";
import { zoomIn, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionFixer } from "../fixed/index";
import Tilt from "react-tilt";

import { experiences } from "../constants/index";

const ExperienceCard = ({
  index,
  title,
  icon,
  company_name,
  points,
  months,
  color,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className=" flex flex-wrap w-full h-auto justify-start items-center gap-6">
          <img src={icon} alt={title} className=" w-16 h-16 object-contain" />
          <h2 className=" font-bold text-[27px] font-sans">{company_name}</h2>
        </div>
        <div className=" flex flex-col gap-4">
          <h3 className=" mt-4 font-serif font-medium text-[20px]">{title}</h3>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>

          <li className=" w-full p-2 ml-2 tracking-wider marker:text-green-500">
            {months}
          </li>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={zoomIn()}>
        <p className={styles.sectionSubText}>Learn more about</p>
        <h2 className={styles.sectionHeadText}>Elision</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className=" mt-20 flex flex-wrap gap-6 ">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            index={index}
            {...experience}
          />
        ))}
      </div>
    </>
  );
};

export default SectionFixer(Experience, "");
