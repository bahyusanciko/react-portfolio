import React, { Component } from "react";

class Interest extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>My Interests</h2>
        <p>
          Apart from coding, I am passionate about photography and traveling. I
          enjoy capturing moments through the lens and exploring new cultures.
        </p>
        <ul>
          <li>Photography</li>
          <li>Traveling</li>
          <li>Music</li>
        </ul>
      </div>
    );
  }
}

export default Interest;
