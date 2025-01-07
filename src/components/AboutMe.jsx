import React from "react";
import Lottie from "react-lottie-player";
import ProfileAvatar from "../assets/profile-animation.json";
import SectionTitle from "./SectionTitle";
import Ar from "../assets/icons/Ar";
const AboutMe = () => {
  return (
    <>
      <section>
        <p className="section-title_mobile">About</p>
        <div className="about-container" id="about-me">
          <Lottie
            play
            loop
            animationData={ProfileAvatar}
            className="about__profile-lottie"
          />
          <div className="about__content-wrapper">
            <SectionTitle title="About me" />
            <p className="section-heading">
              Crafting Digital Experiences: A journey in Code
            </p>
            <p className="about__content">
              Greeting! i'm on journey as a Frontend Software Engineer,
              sculpting digital landscapes for 2.5+ years, currently at
              Browserstack. My educational background inludes MCA & B.Sc in
              Mathematics, enriching my coding odyssey with a solid foundation
              in C++/JS, Data Structures and OOPS. Join me in this exploration
              where each line of code is informed by a fusion of practical
              experience and academic insight, shaping immersive digital
              experiences
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
