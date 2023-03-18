import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants/index";
import { SectionFixer } from "../fixed/index";
import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ project }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={project.date}
    iconStyle={{ background: project.iconBg }}
    icon={
      <div className=" flex justify-center items-center w-full h-full">
        <img
          src={project.icon}
          alt={project.name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className=" p-2 flex flex-col justify-center items-start w-full h-full">
      <img
        src={project.image}
        alt={project.name}
        className=" w-full h-full object-cover rounded-[1rem] scale-110"
      />

      <h3 className=" text-white text-[20px] font-bold mt-10">
        {project.name}
      </h3>
      <p>{project.description}</p>

      <div className=" mt-4 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <p key={tag.name} className={`text-[15px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </VerticalTimelineElement>
);

const Projects = () => {
  return (
    <>
      <motion.div variants={fadeIn()}>
        <p className={styles.sectionSubText}>What i have done</p>
        <h2 className={styles.sectionHeadText}>My Projects</h2>
      </motion.div>

      <div className=" mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ExperienceCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionFixer(Projects, "work");
