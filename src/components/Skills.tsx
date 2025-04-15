import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Front-End Development</h5>
                <p className="card-text">
                  React, JavaScript, HTML, CSS, Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Back-End Development</h5>
                <p className="card-text">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Version Control</h5>
                <p className="card-text">Git, GitHub, GitLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
