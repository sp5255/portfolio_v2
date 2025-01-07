import React from "react";
import SectionTitle from "./SectionTitle";

const Footer = () => {
  return (
    <section className="footer text-center" id="footer">
      <p className="section-heading "> Get in touch! </p>
      <p>Hey!, Let's connect</p>
      <div className="footer__hello-btn">
        <a href="mailto:pundir5255@gmail.com" className="secondary-btn">
          say hello
        </a>
      </div>
    </section>
  );
};

export default Footer;
