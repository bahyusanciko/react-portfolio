import React, { Component } from "react";

class Awards extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>Awards</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Best Developer of the Year - 2023</h5>
            <p>
              Received for outstanding performance and contributions to the
              company's projects.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Innovative Project Award - 2022</h5>
            <p>
              Honored for designing and implementing a groundbreaking feature in
              our product.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Awards;
