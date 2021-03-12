import React, { Component } from "react";
import linkedlin_logo from "./assets/linkedlin_logo.png";
import githublogo from "./assets/github_logo.PNG";
import instagramlogo from "./assets/Instagram_logo.png";
import "./aboutme.css";
function Footer() {
  return (
    <div
      className="d-flex justify-content-center bg-dark text-white"
      style={{
        height: "100%",
        fontSize: "1.3vw",
      }}
    >
      <b>Mobile:&nbsp;&nbsp;</b> +1 (519) 781-2693
      &nbsp;&nbsp;&#124;&nbsp;&nbsp;
      <b>email:&nbsp;&nbsp; </b>
      sajpanchal2020@outlook.com &nbsp;&nbsp;&#124;&nbsp;&nbsp;
      <b>Follow on:&nbsp;&nbsp;</b>
      <a href="https://www.linkedin.com/in/saj-panchal-226106b2">
        <img
          className="follow"
          style={{ width: "1.3vw" }}
          src={linkedlin_logo}
          alt="linkedlinlogo"
        />
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/sajpanchal">
        <img
          className="follow"
          style={{ width: "1.3vw" }}
          src={githublogo}
          alt="githublogo"
        />
      </a>
      &nbsp;&nbsp;
      <a href="https://www.instagram.com/sajpanchal">
        <img
          className="follow"
          style={{ width: "1.3vw" }}
          src={instagramlogo}
          alt="instagramlogo"
        />
      </a>
      &nbsp;&nbsp;&#124;&nbsp;&nbsp; Copyright &copy; 2020 sajpanchal&nbsp;All
      rights reserved.
    </div>
  );
}
export default Footer;
