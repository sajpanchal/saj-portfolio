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
            <span class="first_letter">H</span>ello! My name is Saj Panchal .
            Welcome to my personal web-site. First, I want to tell about myself.
            I came to Canada from India in 2016. I have been living in Waterloo
            since 2018.
          </p>
          <p className="biotext">
            Talking about my Academic Background, I am recently graduated from a
            GED program of Mobile Solutions Development at Conestoga college in
            May 2021. Previously, I did my bachelor's in Engineering from SVIT,
            Gujarat, India in the field of Electronics and Communication
            Engineering (4 Years). Because of my immense interest in software
            programming, object-oriented coding and a background in iOS
            Development from India, I enrolled in this program of Mobile
            solutions Development. In this program, I have learnt many
            web-development and mobile development technologies, frameworks and
            languages. Furthermore, I got a chance to work on many projects in
            an agile team environment where we worked extensively in a
            collaborative manner and we have been using git and azure DevOps
            tools for version control to keep our contribution to projects in
            sync. In these 2 years of my academic terms, I have worked
            diligently on assignments and projects and as a result, I graduated
            with a distinction with a GPA of 3.91.
          </p>
          <p className="biotext">
            I have experience developing mobile apps on the iOS platform for
            about 2 years. I have created mobile apps such as My Expense
            (Available on App Store), MyWeather (weather app), COVID-19 (COVID
            pandemic awareness app), Slide & Score (game app). I made these apps
            in Swift programming language and proficiently used cocoa frameworks
            such UIKit, MapKit, Core Location, JSON APIs, Auto Layout. I am
            currently learning Core Data, SwiftUI, Core ML, Core Animation and
            Core Motion to take my iOS development skills to the next level. I
            am also planning to become an independent iOS developer to create
            some innovative and business solution Apps in near future. Also, I
            have a goal to deploy some of my apps to the Apple Store. As a
            long-term goal, I have a strong desire to become a cross-platform
            App developer with React Native. Moreover, I have been working on
            some mobile app and web app projects with Agile teams and we have
            been using GitHub and Azure DevOps for version control and
            collaboration in projects.
          </p>
        </div>
        <div className="bg-light border" id="divContent">
          <h4 className="subtitle1">
            <i class="fas fa-phone-alt" id="sign"></i> Contact Me
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
