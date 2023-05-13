import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion.js";
const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[120px] w-[120px] ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card "
        variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
      >
        <div className="bg-tertiary rounded-[30px] py-5 px-5"
          // className="bg-tertiary rounded-[20px] px-12 min-h-[120px] flex flex-col justify-evenly items-center "
          // options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain "
          ></img>
          {/* <h3 className="text-white text-[20px] font-bold text-center ">
            ddd
          </h3> */}
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology,index) => (<TechCard index={index} key={technology.name} icon={technology.icon} />
         
      ))}
    </div>
  );
}; 
{/* <div
            className="w-28 h-28 rounded-[40px] bg-tertiary"
            key={technology.name}
          > */}
            {/* <img
              className="h-[100%] w-[100%] "
              src={technology.icon}
              alt={technology.name}
            /> */}
           
  
            {/* <BallCanvas icon={technology.icon} /> */}
          {/* </div> */}
// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

export default SectionWrapper(Tech, "tech");
