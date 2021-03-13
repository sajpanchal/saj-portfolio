import React from "react";
import "./aboutme.css";

function AboutMe() {
  return (
    <React.StrictMode>
      <p className="text-primary font-weight-bold p-2 text-center" id="heading">
        "Hello! Welcome to my personal website."
      </p>

      <div className="bg-light border" id="divContent">
        <h3 className="subtitle1">
          <i className="fas fa-address-card" id="sign"></i> About me
        </h3>
        <hr className="linebreak"></hr>
        <p className="biotext">
          <span class="first_letter">H</span>ello! My name is
          <strong>
            {" "}
            <i> Saj Panchal</i>
          </strong>
          . Welcome to my personal web-site. First, I want to tell about myself
          in a brief summary. on this page, I have put all the personal
          information about me. I came to Canada from India about 4 years ago. I
          have been living in Waterloo since last 2 years and I love living in
          this awesome town.
        </p>
        <p className="biotext">
          Talking about my education, I finished my high school from
          <strong>
            <i> St. Xavier’s Surat, Gujarat, India (year 2010) </i>
          </strong>
          . Then I went ahead to do engineering and I graduated from
          <strong>
            {" "}
            <i>SVIT college (part of GTU)</i>{" "}
          </strong>{" "}
          with
          <strong>
            <i>B.Eng. in Electronics and Communication (year 2014) </i>
          </strong>
          . After that, I wanted to go abroad to study further to do
          specialization in automation field. So, I applied to
          <strong>
            {" "}
            <i>Robotics and Industrial automation</i>
          </strong>{" "}
          program being delivered in{" "}
          <strong>
            {" "}
            <i>Conestoga college </i>
          </strong>{" "}
          which is a specialization program that provides hands-on learning.
        </p>
        <p className="biotext">
          After graduation, I was offered a job as a set-up technician at
          <strong>
            {" "}
            <em> Linamar Corp, Guelph, Ontario (year 2018)</em>{" "}
          </strong>
          . I was assigned to work in one of the production lines in the
          automation assembly plant. I was given a responsibility to monitor the
          production workers, machines, robots and the whole process of assembly
          of automotive parts. So, in general my work includes troubleshoot,
          recover, set-up the malfunctioning machines or robots, occasional
          preventive maintenance of various cells and daily production reporting
          to the production supervisor. I liked that job but I wanted to do
          something more creative and something in which I am more interested
          of.
        </p>
        <p className="biotext">
          As I love coding and I previously demonstrated my ability to develop
          applications in various platforms such as Windows, IOS and HMI
          (automation systems) I chose to study in IT field. And, I came to know
          about the
          <strong>
            {" "}
            <i> Mobile solutions Development </i>
          </strong>
          program being delivered at Conestoga college campus which is nearby to
          location where I have been living. I found that program interesting as
          it was matching with most of the thing that I did in past and things
          in which I want to learn further. Now, my goal is to graduate from
          this program with high GPA and become an iOS developer or full-stack
          developer.
        </p>
        <p className="biotext">
          Talking about my hobbies and interests, I love reading, watching
          cricket, listening to the music, and traveling. On top of all that, I
          like to help others and I love being independent. As of that, I work
          for Door Dash as a delivery driver which is a perfect platform for me
          to earn money and at the same time, a sort of opportunity to help
          people. Moreover, I work completely independent as I can choose at
          what time I want to work, where I want to work and for how many days
          and hours a week I want to work. It is as if I am my own boss.
        </p>
      </div>
    </React.StrictMode>
  );
}

export default AboutMe;
