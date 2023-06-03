import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { TypeAnimation } from "react-type-animation";
import { ProfilePic2 } from "../assets";import { Avatar } from "@mui/material";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute top-[120px]  max-w-7xl mx-auto flex flex-col-reverse md:flex-row  gap-5`} >
      <div
        className={`inset-0 w-[60%] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <span className="text-[#915eff] ">
              <TypeAnimation
                sequence={["Prashant Manandhar", 1000]}
                wrapper="span"
                cursor={false}
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            <TypeAnimation
              sequence={[
                "Flutter Developer..",
                1000,
                "React Developer..",
                1000,
                "Web Developer..",
                1000,
              ]}
              cursor={true}
              repeat={Infinity}
              wrapper="span"
            />
          </p>
        </div>
      </div>
      <ProfileAvatars />
    </div>
      <div className="absolute  xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                reportType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
     
      
    </section>
  );
};

const ProfileAvatars = () => {
  return (
    <div className="w-full h-60  flex justify-center items-center md:h-80 md:w-80">
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <Avatar
          style={{ height: "80%", width: "80%" }}
          className=" border-4 border-transparent animate-circle-rotate"
          src={ProfilePic2}
          alt={"profile Pic"}
        />
        <div className="absolute w-full h-full border-t-4 border-b-4 border-t-lime-500 border-b-blue-500 border-opacity-50 rounded-full animate-spin-right"></div>
        <div className="absolute w-[85%] h-[85%] border-l-4 border-r-4 border-l-[#ff0000] border-r-[#ff8000] border-opacity-50 rounded-full animate-spin-left"></div>
      </div>
    </div>
  );
};

export default Hero;
