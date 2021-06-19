import React from "react";
import linkedlin_logo from "./assets/linkedlin_logo.png";
import githublogo from "./assets/github_logo.PNG";
import instagramlogo from "./assets/Instagram_logo.png";
import "./aboutme.css";
function Footer() {
  return (
    <div
      className="d-flex justify-content-center bg-dark text-white"
      id="footerDiv"
    >
      <b>Mobile:&nbsp;&nbsp;</b> +1 (519) 781-2693&nbsp;&nbsp;&#124;&nbsp;&nbsp;
      <b>Email:&nbsp;&nbsp; </b>
      sajpanchal2020@outlook.com&nbsp;&nbsp;&#124;&nbsp;&nbsp;
      <b>Follow On:&nbsp;&nbsp;</b>
      <a
        href="https://www.linkedin.com/in/saj-panchal-226106b2"
        target="_blank"
        rel="noreferrer"
      >
        <img className="follow" src={linkedlin_logo} alt="linkedlinlogo" />
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/sajpanchal" target="_blank" rel="noreferrer">
        <img className="follow" src={githublogo} alt="githublogo" />
      </a>
      &nbsp;&nbsp;
      <a
        href="https://www.instagram.com/sajpanchal"
        target="_blank"
        rel="noreferrer"
      >
        <img className="follow" src={instagramlogo} alt="instagramlogo" />
      </a>
      &nbsp;&nbsp;&#124;&nbsp;&nbsp; Copyright &copy; 2020 sajpanchal&nbsp;All
      rights reserved.
    </div>
  );
}
export default Footer;
