import React from "react";

import "./Styles/Section.css";

import db from "./Assets/Damboy.eth.png";

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={db} alt="" />
        </div>

        <div className="section__content">
          <h1 className="name">Damboy</h1>

          <p className="skills">
            Experience in frontend and backend development
          </p>

          <p className="skills">JavaScript development</p>

          <p className="skills">C# </p>

          <p className="skills">Solidity </p>

          <p className="skills">Professional UI and UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
