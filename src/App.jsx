import { useEffect, useState } from "react";
import "./App.scss";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import MatterCanvas from "./components/Matter";
import Skills from "./components/Skills";
import { Work } from "./components/Work";
import LogoLoader from "./components/LogoLoader";
import anime from "animejs";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     clearTimeout(id);
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  useEffect(() => {
    if (!isLoading) {
      anime({
        targets: ".app-header",
        opacity: [0, 1],
        translateY: [-20, 0], // Slide the content slightly upwards
        easing: "easeInOutQuad",
        duration: 400,
      });
      anime({
        targets: ".app-sections",
        opacity: [0, 1],
        translateY: [20, 0], // Slide the content slightly upwards
        easing: "easeInOutQuad",
        duration: 400,
      });
    }
  }, [isLoading]);

  useEffect(() => {
    const animateOnScroll = () => {
      // anime({
      //   targets: document.querySelectorAll(".app-sections section"),
      //   translateY: 270,
      //   // loop: true,
      // });
    };
    window.addEventListener("scroll", animateOnScroll);

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
  return (
    <>
      {/* <div>
        <MatterCanvas />
      </div> */}
      {isLoading ? (
        <LogoLoader handleLoadingApp={() => setLoading(false)} />
      ) : (
        <div className="xl-screen global-padding root-app">
          <header className="app-header">
            <NavBar />
          </header>
          <div className="app-sections">
            <Home />
            <AboutMe />
            <Work />
            <Skills />
            <Projects />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

/* 
background - can be - #222326
main green - #00c269, #03c168,
button, green -> #00be68
background black -> #262626, #272727 ( nav bar bg), nav bar border color (  #333333)
white -> #f9f9f9,
homepage main secion -> content -> #b9b9b9
content white -> #dadada

about me heading white -> #fafafa, bg-> #2a2a2a
 */
