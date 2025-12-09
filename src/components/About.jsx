import React from "react";
import "./About.css";
import pic from "../assets/about 1.png";

export default function About() {
  return (
    <div className="about-wrapper" id="about">
      

      <h1 className="title">★ About Me ★</h1>

      <div className="content-grid">
        {/* LEFT CARD */}
        <div className="left-card">
         <img src={pic} alt="about me pic" className="profile-img" />
          <h2>Imene Kadri</h2>
          <h3 className="role">Front End Developer</h3>
          <p className="email">Imenekadri04@Gmail.Com</p>
        </div>

        {/* EXPERIENCE */}
        <div className="experience-card">
          <h3>My Experience </h3>
        </div>

        {/* EDUCATION */}
        <div className="education-card">
          <h3>Education</h3>
        </div>

        {/* EXTRA CARD */}
        <div className="extra-card">
          <button className="github-btn">View My Github</button>
        </div>
      </div>
    </div>
  );
}
