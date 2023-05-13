import React from "react";
import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
const ServiceCard = ({ index, title, icon }) => {
  return (<Tilt className="xs:w-[250px] w-full ">
  <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card " variants={fadeIn("right","spring",0.5*index,0.75)}>
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center " options={{max:45,scale:1, speed:450}} >
<img src={icon} alt={title} className="w-16 h-16 object-contain "></img>
    <h3 className="text-white text-[20px] font-bold text-center ">{title}</h3>
    </div>
  </motion.div>
 </Tilt>
  )
};
const About = () => {
  const Bio = `"Hello there! I am a highly skilled computer engineering professional with expertise in various programming languages such as C, C++, Flutter, Dart, React, HTML, CSS, and JavaScript. I am a quick learner and always eager to take on new challenges that help me further expand my skillset. In my free time, I love to indulge in my hobbies of cycling and reading novels and comics. My passion for technology and innovation drives me to continuously learn and stay up-to-date with the latest trends in the industry. With my strong work ethic and exceptional problem-solving skills, I am confident in my ability to contribute to any project I am a part of. Thank you for taking the time to read my bio, and I look forward to potentially working with you!"`;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        {Bio}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
      {/* {console.log(services.length())} */}
        {services.map((service,index) => {
         return (
          <ServiceCard key={service.title} index={index}  title={service.title} {...service}/>)
        })}
      </div>
    </>
  );
};

export default About;
