import React from "react";

const NavBar = () => {
  return (
    <nav>
      <p className="logo">
        <span>&lt; S</span>achin<span>&nbsp;/&gt;</span>{" "}
      </p>
      <div className="nav__menu">
        <ul>
          <li>
            {" "}
            <a href="#home">Home </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about-me">About me </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#skills">Skills </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#experience">Experience </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#projects">Projects </a>{" "}
          </li>
        </ul>
      </div>
      <button className="nav__contact primary-btn">Contact Me</button>
    </nav>
  );
};

export default NavBar;
