import "./App.css";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
import AboutMe from "./aboutme";
import Portfolio from "./portfolio";
import { Redirect, Route, Switch } from "react-router-dom";
import ProjectLinks from "./ProjectLinks";

function App() {
  return (
    <React.StrictMode>
      <Header></Header>
      <Navbar></Navbar>
      <div style={{ minHeight: "100%" }}>
        <Switch>
          <Route path="/aboutme" component={AboutMe}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/projectlinks" component={ProjectLinks}></Route>
          <Route path="/" component={AboutMe}></Route>
        </Switch>
      </div>
      <footer style={{ height: "5vw" }}>
        <Footer></Footer>
      </footer>
    </React.StrictMode>
  );
}

export default App;
