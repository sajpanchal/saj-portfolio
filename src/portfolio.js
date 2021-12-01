import React from "react";
import "./aboutme.css";
import "./portfolio.css";
import HTML5 from "./icons/HTML5.png";
import CSS3 from "./icons/CSS3.png";
import JavaScript from "./icons/JavaScript.png";
import ReactJS from "./icons/React.png";
import NodejS from "./icons/Nodejs.png";
import Swift from "./icons/swift.png";
import Xcode from "./icons/Xcode.png";
import UIKit from "./icons/UIKit.png";
import Cocoa from "./icons/Cocoa Touch.png";
import CSharp from "./icons/C-Sharp.png";
import git from "./icons/git.png";
import swiftUI from "./icons/SwiftUI.png";
import gitBash from "./icons/Git-bash.png";
import github from "./icons/github.png";
import azureDevOps from "./icons/Azure DevOps.png";
import MSSQL from "./icons/MS SQL.png";
import MongoDB from "./icons/Mongodb.png";
function Portfolio() {
  return (
    <React.StrictMode>
      <p className="text-primary font-weight-bold p-2 text-center" id="heading">
        "Here is my portfolio where you will find about my past projects and
        qualifications!"
      </p>
      <div className="bg-light border" id="divContent">
        <h3 className="subtitle1">
          <i className="fas fa-user-check" id="sign"></i> Skills and
          Qualifications Summary
        </h3>
        <hr className="linebreak"></hr>
        <h4 className="subtitle2">Web Development:</h4>
        <div className="row123">
          <div class="col123">
            <img className="icons" src={HTML5} alt="HTML5" />
            <h3 className="iconCaption">HTML5</h3>
          </div>
          <div class="col123">
            <img className="icons" src={CSS3} alt="css3" />
            <h3 className="iconCaption">CSS3</h3>
          </div>
          <div class="col123">
            <img className="icons" src={JavaScript} alt="javascript" />
            <h3 className="iconCaption">JavaScript</h3>
          </div>
          <div class="col123">
            <img className="icons" src={ReactJS} alt="reactjs" />
            <h3 className="iconCaption">React.js</h3>
          </div>
          <div class="col123">
            <img className="icons" src={NodejS} alt="nodejs" />
            <h3 className="iconCaption">Node.js</h3>
          </div>
        </div>
        <h4 className="subtitle2">iOS Development:</h4>
        <div className="row123">
          <div class="col123">
            <img className="icons" src={Swift} alt="swift" />
            <h3 className="iconCaption">Swift</h3>
          </div>
          <div class="col123">
            <img className="icons" src={swiftUI} alt="swiftUI" />
            <h3 className="iconCaption">SwiftUI</h3>
          </div>
          <div class="col123">
            <img className="icons" src={Xcode} alt="xcode" />
            <h3 className="iconCaption">Xcode IDE</h3>
          </div>
          <div class="col123">
            <img className="icons" src={UIKit} alt="uikit" />
            <h3 className="iconCaption">UIKit</h3>
          </div>
          <div class="col123">
            <img className="icons" src={Cocoa} alt="cocoa" />
            <h3 className="iconCaption">Cocoa</h3>
          </div>
        </div>
        <h4 className="subtitle2">Database Management:</h4>
        <div class="row123">
          <div class="col123">
            <img className="icons" src={MSSQL} alt="mssql" />
            <h3 className="iconCaption">MS SQL Server</h3>
          </div>
          <div class="col123">
            <img className="icons" src={MongoDB} alt="mongodb" />
            <h3 className="iconCaption">MongoDB</h3>
          </div>
        </div>
        <h4 className="subtitle2">Object Oriented Programming Languages:</h4>
        <div class="row123">
          <div class="col123">
            <img className="icons" src={Swift} alt="swift" />
            <h3 className="iconCaption">Swift</h3>
          </div>
          <div class="col123">
            <img className="icons" src={JavaScript} alt="javascript" />
            <h3 className="iconCaption">JavaScript</h3>
          </div>
          <div class="col123">
            <img className="icons" src={CSharp} alt="csharp" />
            <h3 className="iconCaption">C#</h3>
          </div>
        </div>
        <h4 className="subtitle2">Version Control:</h4>
        <div class="row123">
          <div class="col123">
            <img className="icons" src={git} alt="git" />
            <h3 className="iconCaption">git</h3>
          </div>
          <div class="col123">
            <img className="icons" src={gitBash} alt="gitbash" />
            <h3 className="iconCaption">GitBash</h3>
          </div>
          <div class="col123">
            <img className="icons" src={github} alt="github" />
            <h3 className="iconCaption">GitHub</h3>
          </div>
          <div class="col123">
            <img className="icons" src={azureDevOps} alt="azuredevops" />
            <h3 className="iconCaption">Azure DevOps</h3>
          </div>
        </div>
      </div>

      <div className="bg-light border" id="divContent">
        <h3 className="subtitle1">
          <i className="fas fa-briefcase" id="sign"></i> Project
        </h3>
        <hr className="linebreak"></hr>
        <h4 className="subtitle2">My Expense - iOS App</h4>
        <dl className="subtitle3">
          <dt>
            <u className="subtitle4">Brief summary:</u>
          </dt>
          <dd className="biotext">
            This is the personal financing app supported with iCloud to store
            and sync data across multiple iOS devices. It allows user to record
            expenses and earnings and based on that the app is going to generate
            an expense summary and gives monthly and annual savings details.
          </dd>
          <dt>
            <u className="subtitle4">Technical Details: </u>
          </dt>
          <dd className="biotext">
            iOS App with CoreData + CloudKit framework support to store the
            expenses and calculate total expenses of days, months and years. It
            also gives user the insight of monthly savings by collecting monthly
            income and deducting monthly expense from it. Secured data by
            authenticating user sign in with Apple ID. Use one iCloud account to
            store and sync app data to multiple iOS devices. Utilized wide range
            of UI elements provided by Apple XCode IDE. Successfully developed a
            responsive app featuring Custom Table View Controller, Navigation
            View Controller, Tab bar Controller, auto-layout constraints,
            AlertViews, SegmentedControls etc.
          </dd>
        </dl>
        <h4 className="subtitle2">COVID-19 - iOS App</h4>
        <dl className="subtitle3">
          <dt>
            <u className="subtitle4">Brief summary:</u>
          </dt>
          <dd className="biotext">
            This is the Application built to share worldwide and countrywise
            statistics of deaths, infections and treatments going underway of
            those affected by COVID-19. It also features Assessment tools to
            test if you have the COVID-19 based on possible common symptoms
            experienced. Moreover, there are some guidelines on how to prevent
            the COVID-19 spread.
          </dd>
          <dt>
            <u className="subtitle4">Technical Details: </u>
          </dt>
          <dd className="biotext">
            The App allows user to search for the COVID-19 data worldwide and
            countrywise. The Application design features good range of UI
            elements available from Apple's UIKit multi-view
            controllers/segueing, auto layout constraints, AlertViews,
            ScrollViews, StackViews, SegmentedControls, images, logos etc. In
            addition, we used third-party library to embed graphs to prepresent
            data more effectively. This App uses apple's CoreLocation module to
            gather geo-coordinates to search different contries. This data is
            sent to google's API which than brings the COVID-19 data of a
            specific country.
          </dd>
        </dl>
        <h4 className="subtitle2">My Forecast - iOS App</h4>
        <dl className="subtitle3">
          <dt>
            <u className="subtitle4">Brief summary:</u>
          </dt>
          <dd className="biotext">
            This is the iOS App using a third-party API to get the weather
            forecast data of your device's set location. This app shows weather
            forecast of 5 days including the present day. User can view the
            weather forecast in more details by tapping a desired day. It shows
            weather data such as temperature, feels-like temperature,
            sunrise-sunset times, wind speed, himidity and air pressure.
          </dd>
          <dt>
            <u className="subtitle4">Technical Details: </u>
          </dt>
          <dd className="biotext">
            Developed an application that gives the 5-day weather forecast of
            your current location. Used an API from OpenWeatherMap.org to get
            the weather data such as temperature, location, humidity etc. and
            parsed the data into an app using JSON parsing. Skillfully utilized
            the TableView and TableViewCell elements to accommodate the 7-day
            weather data in an organized manner. Successfully implemented
            methods and code blocks to switch the weather data from Metric to
            imperial units. (API is not providing unit conversions for all
            weather data).
          </dd>
        </dl>
      </div>
      <div className="bg-light border" id="divContent">
        <h3 className="subtitle1">
          <i className="fas fa-user-graduate" id="sign"></i> Education
        </h3>
        <hr className="linebreak"></hr>
        <h4 className="subtitle2">
          Conestoga College, Waterloo, ON (2020-2021)
        </h4>
        <ul className="subtitle3">
          <li className="subtitle4">
            Mobile Solutions Development - Post Graduate
          </li>
          <li className="subtitle4">Overall GPA: 3.86</li>
        </ul>
        <h4 className="subtitle2">
          Sardar Vallabhbhai Institute of Technology, Gujarat, India (2010-2014)
        </h4>
        <ul className="subtitle3">
          <li className="subtitle4">Electronics & Communication - B.Eng.</li>
          <li className="subtitle4">Overall CGPA: 7.20</li>
        </ul>
      </div>
    </React.StrictMode>
  );
}
export default Portfolio;
