import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

import todoImg from "../assets/images/todo.png";
import EcommerceImg from "../assets/images/e_commerce.png";
import visualizerImg from "../assets/images/sorting_visualiser.png";
import stopwatch from "../assets/images/stopwatch.png";
import weatherApp from "../assets/images/weather_app.png";
import youtube from "../assets/images/youtube.png";
import BrowserstackLogo from "../assets/icons/BrowserstackLogo";
import RadiansysLogo from "../assets/icons/RadiansysLogo";
import Skills from "./Skills";

const Projects = () => {
  const projects = [
    {
      title: "Sorting Visualizer",
      desc: "Built in HTML, CSS & JS.This is the visualization of some sorting algorithms,",
      image: visualizerImg,
      liveLink: "https://sp5255.github.io/sortingAlgo_visual/",
      techStack: ["HTML", "CSS", "JS"],
    },

    {
      title: "E-Commerce Websit",
      desc: "An E-commerce like website. Built using HTML, CSS, JS, Bootstrap, ExpressJs, MongoDB",
      image: EcommerceImg,
      liveLink: "https://agile-peak-65322.herokuapp.com/",
      techStack: ["HTML", "CSS", "JS"],
    },
    {
      title: "Weather-App",
      desc: "A weather forecasting web app. Built in Reactjs, using Axios and Context-api. Also have a search city weather functionality. Forecast Daywise weather",
      image: weatherApp,
      liveLink: "https://sp5255.github.io/Weather-app/",
      techStack: ["HTML", "CSS", "JS"],
    },
    {
      title: "Stop Watch",
      desc: "Built in HTML, CSS and JavaScript. Having beautiful UI and functionality of Laps and Pause etc.",
      image: stopwatch,
      liveLink: "https://sachinpundir1.github.io/Ad/Jan%208%20(Stop%20watch)/",
      techStack: ["HTML", "CSS", "JS"],
    },
    {
      title: "Youtube Home Clone",
      desc: "Built in HTML, CSS and JavaScript. This is a clone of Youtube Homepage having infinite scrolling videos. we can Play the videos too",
      image: youtube,
      liveLink: "https://sachinpundir1.github.io/Ad/Jan%2015%20(YT)/",
      techStack: ["HTML", "CSS", "JS"],
    },

    {
      title: "Todo WebApp",
      desc: "Built in ReactJs, we can mark the Tasks as completed and can delete them too",
      image: todoImg,
      liveLink: "https://sp5255.github.io/Todo/",
      techStack: ["HTML", "CSS", "JS"],
    },
  ];

  const [length, setLength] = useState(3);
  const handleSeeMore = () => {
    setLength((prev) => prev + 3);
  };
  return (
    <>
      <section>
        <p className="section-title_mobile">Personal Projects</p>
        <div className="projects-section" id="projects">
          <SectionTitle title="Personal Projects" />
          <p className="section-heading">Things i've built so far</p>
          <div className="projects-container">
            {projects.slice(0, length).map((project) => {
              return <Projects.card {...project} key={project.title} />;
            })}
          </div>
          {length < projects.length && (
            <button
              className="projects-section__see-more-btn secondary-btn"
              onClick={handleSeeMore}
            >
              See more
            </button>
          )}
        </div>
      </section>
    </>
  );
};

Projects.card = ({ image, title, desc, techStack, liveLink }) => {
  return (
    <div className="projects-container__card">
      <img src={image} />
      <div>
        <p className="projects-container__card__title">{title}</p>
        <p className="projects-container__card__desc">{desc}</p>
        <div className="projects-container__card__techs">
          {techStack?.map((tech) => {
            return (
              <p className="tech-card" key={tech}>
                {tech}
              </p>
            );
          })}
        </div>
        <div className="projects-container__card__live-link">
          <a href={liveLink} target="_blank">
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
