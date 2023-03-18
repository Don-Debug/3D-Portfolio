import React from "react";
import Tilt from "react-tilt";

import { services } from "../constants/index";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, zoomIn } from "../utils/motion";
import { SectionFixer } from "../fixed/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-cover" />
          <h3 className=" text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
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
        I'm a skilled Fronend developer with experience in JavaScript and
        expertise in frameworks like React, Next and Three.js. I'm a quick
        learner and collaborate closely with clients to create efficient and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>

      <div className=" mt-20 flex flex-wrap gap-10 justify-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionFixer(About, "about");
