import React from "react";
import { styles } from "./style";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";
import { useParams } from 'react-router-dom';
import { projects } from "./constants";
import { useLocation } from "react-router-dom";
import ProjectCard from "./components/ProjectCard";
import {
    ProjectSlide,
  } from "./components";
const ProjectSlider = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  return ( 
    <div className="min-h-[100vh]">
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects.</p>
        <h2 className={styles.sectionHeadText}>{name}.</h2>
      </motion.div>
      <ProjectSlide />
  </div>
  )
}

export default SectionWrapper (ProjectSlider)
