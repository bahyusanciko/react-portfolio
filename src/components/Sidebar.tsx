import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; 

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "experience",
      "skills",
      "interest",
      "awards",
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveLink(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "250px",
        backgroundColor: "#333",
        color: "#fff",
        paddingTop: "20px",
        paddingLeft: "10px",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>My Portfolio</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li className={`sidebar-link ${activeLink === "home" ? "active" : ""}`}>
          <Link to="home" smooth={true} duration={500} className="text-white">
            Home
          </Link>
        </li>
        <li
          className={`sidebar-link ${activeLink === "about" ? "active" : ""}`}
        >
          <Link to="about" smooth={true} duration={500} className="text-white">
            About
          </Link>
        </li>
        <li
          className={`sidebar-link ${
            activeLink === "experience" ? "active" : ""
          }`}
        >
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-white"
          >
            Experience
          </Link>
        </li>
        <li
          className={`sidebar-link ${activeLink === "skills" ? "active" : ""}`}
        >
          <Link to="skills" smooth={true} duration={500} className="text-white">
            Skills
          </Link>
        </li>
        <li
          className={`sidebar-link ${
            activeLink === "interest" ? "active" : ""
          }`}
        >
          <Link
            to="interest"
            smooth={true}
            duration={500}
            className="text-white"
          >
            Interests
          </Link>
        </li>
        <li
          className={`sidebar-link ${activeLink === "awards" ? "active" : ""}`}
        >
          <Link to="awards" smooth={true} duration={500} className="text-white">
            Awards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
