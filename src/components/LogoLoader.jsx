import anime from "animejs";
import React, { useEffect } from "react";

const LogoLoader = ({ handleLoadingApp }) => {
  useEffect(() => {
    // Sequential Path Writing
    anime({
      targets: ".logo-animation-demo path",
      strokeDasharray: [anime.setDashoffset, anime.setDashoffset], // Path length
      strokeDashoffset: [anime.setDashoffset, 0], // Animates from hidden to visible
      stroke: ["#ffffff", "#03c168"], // Black to blue gradient
      easing: "easeInOutSine",
      duration: 200,
      delay: anime.stagger(200), // Sequential animation
    });

    // Circular Progress Animation (Outer Circle)
    anime({
      targets: ".outer-circle",
      strokeDasharray: [0, 565], // Stroke length of the circle
      strokeDashoffset: [565, 0], // Animate the stroke as a writing effect
      stroke: ["#ffffff", "#dadada"],
      easing: "easeInOutSine",
      duration: 1500,
      loop: false, // Continuous loop
      //   direction: "alternate",
      complete: () => {
        handleLoadingApp();
      },
    });

    // Rotation Animation for the entire SVG
    // anime({
    //   targets: ".logo-animation-demo",
    //   rotate: [0, 360], // Full rotation
    //   easing: "easeInOutCubic",
    //   duration: 1000, // Time for full rotation
    //   loop: true, // Keeps rotating
    // });

    // Pulsating Scale Effect for SVG
    anime({
      targets: ".logo-animation-demo",
      scale: [1, 1.1], // Slight zoom in and out
      easing: "easeInOutQuad",
      duration: 1000,
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // background: "#f4f4f4",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="logo-animation-demo"
        viewBox="0 0 200 200"
        style={{ width: "50px" /* height: "100px" */ }}
      >
        {/* Outer Circle */}
        <circle
          className="outer-circle"
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#eaeaea"
          strokeWidth="5"
          strokeDasharray="565"
          strokeLinecap="round"
        />

        {/* Inner Paths */}
        <g>
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            paintOrder="fill stroke markers"
            d="M 40 120 Q 200 120 30 0"
            strokeMiterlimit={10}
            strokeWidth={10}
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            paintOrder="fill stroke markers"
            d="M 40 100 L 40 120"
            strokeMiterlimit={10}
            strokeWidth={10}
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            paintOrder="fill stroke markers"
            d="M 130 30 Q -25 10 155 160"
            strokeMiterlimit={10}
            strokeWidth={10}
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            paintOrder="fill stroke markers"
            d="M 130 30 L 130 50"
            strokeMiterlimit={10}
            strokeWidth={10}
          />
        </g>
      </svg>
    </div>
  );
};

export default LogoLoader;
