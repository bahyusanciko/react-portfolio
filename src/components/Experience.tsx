import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>Experience</h2>
        <div className="list-group">
          <div className="list-group-item">
            <h5>Software Developer at XYZ Corp</h5>
            <p>Jan 2021 - Present</p>
            <p>
              Working on building scalable web applications with React and
              Node.js. Implemented features to enhance the user experience.
            </p>
          </div>
          <div className="list-group-item">
            <h5>Junior Developer at ABC Ltd</h5>
            <p>Jun 2019 - Dec 2020</p>
            <p>
              Assisted in developing client-side applications using JavaScript
              and frameworks like Vue.js.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
