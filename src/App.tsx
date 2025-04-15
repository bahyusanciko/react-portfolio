import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Interest from "./components/Interest";
import Awards from "./components/Awards";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="interest">
            <Interest />
          </div>
          <div id="awards">
            <Awards />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
