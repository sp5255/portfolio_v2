import React, { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";

// Load Matter.js plugins
Matter.use("matter-attractors");

const MatterCanvas = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Initialize Matter.js
  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Mouse,
      Events,
      Common,
      Body,
    } = Matter;

    // Create engine
    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // Create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Create runner
    const runner = Runner.create();

    // Create a body with an attractor
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        render: {
          fillStyle: "#000",
          strokeStyle: "#000",
          lineWidth: 0,
        },
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              // Attraction force between the attractor and other bodies
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // Add random bodies to be attracted
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, render.options.width);
      const y = Common.random(0, render.options.height);
      const s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 6);

      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: "none",
          lineWidth: 2,
        },
      });

      World.add(world, body);

      const r = Common.random(0, 1);
      const circle = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: "#7fffd4ab", // r > 0.3 ? "#27292d" : "#444444",
          strokeStyle: "#000000",
          lineWidth: 2,
        },
      });

      World.add(world, circle);

      World.add(
        world,
        Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? "#334443" : "#222222",
            strokeStyle: "#111111",
            lineWidth: 4,
          },
        })
      );

      World.add(
        world,
        Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: "#191919",
            strokeStyle: "#111111",
            lineWidth: 3,
          },
        })
      );
    }

    // Add mouse control to move the attractor
    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x) return;
      // Smoothly move the attractor body towards the mouse
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Start the simulation
    Runner.run(runner, engine);
    Render.run(render);

    const preventDefaultScroll = (e) => {
      e.preventDefault();
    };

    const canvasElement = render.canvas;
    // Enable page scrolling when the user scrolls the canvas
    canvasElement.addEventListener("wheel", preventDefaultScroll, {
      passive: false, // This is important to prevent the default action
    });

    // Cleanup when the component is unmounted
    return () => {
      canvasElement.removeEventListener("wheel", preventDefaultScroll);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    };
  }, [dimensions]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={canvasRef}
      className="matter-canva"
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    />
  );
};

export default MatterCanvas;
