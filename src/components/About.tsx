import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>About Me</h2>
        <p>
          I am a developer with experience in building web applications. I
          specialize in front-end development using React and have a background
          in back-end development with Node.js.
        </p>
        <h4>My Skills</h4>
        <ul>
          <li>React, JavaScript</li>
          <li>Node.js, Express</li>
          <li>HTML, CSS, Bootstrap</li>
        </ul>
      </div>
    );
  }
}

export default About;
