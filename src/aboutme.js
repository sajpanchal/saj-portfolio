import React from "react";
import "./aboutme.css";
import axios from "axios";
import Joi from "joi-browser";
import { BASE_API_URL } from "./utils/constants";
class AboutMe extends React.Component {
  state = {
    data: { email: "", subject: "", message: "" },
    errorMsg: { email: "", subject: "", message: "" },
    success: false,
  };
  schema = {
    email: Joi.string().required().email().label("Email Address"),
    subject: Joi.string().required().min(1).max(50).label("Subject"),
    message: Joi.string().required().min(1).label("Message"),
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let { data, errorMsg, success } = { ...this.state };
    console.log(data);
    const { error } = Joi.validate(data, this.schema);
    if (error) {
      for (let item of error.details) {
        errorMsg[item.path[0]] = item.message;
      }
      console.log("errors:", errorMsg);
      this.setState({ errorMsg: errorMsg });
    } else {
      axios.post(`${BASE_API_URL}/api/email`, data).then((res) => {
        console.log(data);
        console.log(res);
        console.log(res.data);
      });
      errorMsg = { email: "", subject: "", message: "" };
      data = { email: "", subject: "", message: "" };
      success = true;

      this.setState({ data: data, errorMsg: errorMsg, success: success });
      console.log(this.state);
    }
  };
  handleChange = (event) => {
    const input = { [event.currentTarget.name]: event.currentTarget.value };
    let { data, errorMsg, success } = { ...this.state };
    const schema = {
      [event.currentTarget.name]: this.schema[event.currentTarget.name],
    };
    const { error } = Joi.validate(input, schema);
    if (error) {
      success = false;
      errorMsg[event.currentTarget.name] = error.details[0].message;
      data[event.currentTarget.name] = event.currentTarget.value;
      this.setState({ data: data, errorMsg: errorMsg, success: success });
      console.log(error.details[0].message);
      console.log("state:", this.state);
    } else {
      data[event.currentTarget.name] = event.currentTarget.value;
      errorMsg[event.currentTarget.name] = "";
      this.setState({ data: data, errorMsg: errorMsg });
      console.log(this.state);
    }
  };
  render() {
    return (
      <React.StrictMode>
        <p
          className="text-primary font-weight-bold p-2 text-center"
          id="heading"
        >
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
            . Welcome to my personal web-site. First, I want to tell about
            myself in a brief summary. on this page, I have put all the personal
            information about me. I came to Canada from India about 4 years ago.
            I have been living in Waterloo since last 2 years and I love living
            in this awesome town.
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
            automation assembly plant. I was given a responsibility to monitor
            the production workers, machines, robots and the whole process of
            assembly of automotive parts. So, in general my work includes
            troubleshoot, recover, set-up the malfunctioning machines or robots,
            occasional preventive maintenance of various cells and daily
            production reporting to the production supervisor. I liked that job
            but I wanted to do something more creative and something in which I
            am more interested of.
          </p>
          <p className="biotext">
            As I love coding and I previously demonstrated my ability to develop
            applications in various platforms such as Windows, IOS and HMI
            (automation systems) I chose to study in IT field. And, I came to
            know about the
            <strong>
              {" "}
              <i> Mobile solutions Development </i>
            </strong>
            program being delivered at Conestoga college campus which is nearby
            to location where I have been living. I found that program
            interesting as it was matching with most of the thing that I did in
            past and things in which I want to learn further. Now, my goal is to
            graduate from this program with high GPA and become an iOS developer
            or full-stack developer.
          </p>
          <p className="biotext">
            Talking about my hobbies and interests, I love reading, watching
            cricket, listening to the music, and traveling. On top of all that,
            I like to help others and I love being independent. As of that, I
            work for Door Dash as a delivery driver which is a perfect platform
            for me to earn money and at the same time, a sort of opportunity to
            help people. Moreover, I work completely independent as I can choose
            at what time I want to work, where I want to work and for how many
            days and hours a week I want to work. It is as if I am my own boss.
          </p>
        </div>
        <div className="bg-light border" id="divContent">
          <h4 className="subtitle1">
            <i class="fas fa-phone-alt"></i> Contact Me
          </h4>
          <hr className="linebreak"></hr>
          <form className="contactme" onSubmit={this.handleSubmit}>
            <label className="label">Email:</label>
            <br className="break"></br>
            <input
              className="inputfield"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={this.state.data.email}
              onChange={this.handleChange}
            ></input>{" "}
            <br className="break"></br>
            {this.state.errorMsg.email.length > 0 && (
              <span className="alerttext">{this.state.errorMsg.email}</span>
            )}
            <br className="break"></br>
            <label className="label">Subject:</label>
            <br className="break"></br>
            <input
              className="inputfield"
              name="subject"
              type="text"
              placeholder="What are you looking for?"
              value={this.state.data.subject}
              onChange={this.handleChange}
            ></input>{" "}
            <br className="break"></br>
            {this.state.errorMsg.subject.length > 0 && (
              <span className="alerttext">{this.state.errorMsg.subject}</span>
            )}
            <br className="break"></br>
            <label className="label">Message:</label>
            <br className="break"></br>
            <textarea
              className="inputfield"
              name="message"
              type="text"
              placeholder="Type your message here..."
              value={this.state.data.message}
              onChange={this.handleChange}
            ></textarea>
            <br className="break"></br>
            {this.state.errorMsg.message.length > 0 && (
              <span className="alerttext">{this.state.errorMsg.message}</span>
            )}
            <br className="break"></br>
            <br className="break"></br>
            <input className="submit" type="submit" value="Submit"></input>
            <br className="break"></br>
            {this.state.success && (
              <span className="success">
                "your message is sent successfully!"
              </span>
            )}
          </form>
        </div>
      </React.StrictMode>
    );
  }
}

export default AboutMe;
