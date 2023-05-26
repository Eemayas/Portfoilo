import React from "react";
import {
  About,
  About2,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  LetSTalk,
} from "./components";
const LandingPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <About2 />
      {/* <Experience/> */}
      <Tech />
      <Works />
      {/* <Feedbacks/> */}
      <div className="relative z-0 bg-primary">
        <LetSTalk />
        <Contact />
        <StarsCanvas />
      </div>
      {/* <Project /> */}
    </div>
  );
};

export default LandingPage;
