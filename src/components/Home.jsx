import React from "react";
import Lottie from "react-lottie-player";
import developerAnimation from "../assets/developer-animation.json";
// import "../matter";
import MatterCanvas from "./Matter";
const Home = () => {
  return (
    <>
      {/* <div className="home-wrapper"> */}
      {/* <MatterCanvas /> */}
      <section>
        {/* <p className="section-title_mobile">Home</p> */}
        <div className="home-section " id="home">
          <div className="home__content">
            <p>Hi, I'm</p>
            <p>Sachin Pundir</p>
            <p>
              a Software Engineer with 2.5+ years of experience turning ideas
              into seamless, user-friendly digital experiences
            </p>
            <button className="secondary-btn home__resume-btn">Resume</button>
          </div>
          <Lottie
            loop
            animationData={developerAnimation}
            play
            className="lottie-custom"
          />
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Home;
