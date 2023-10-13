import React, { Component } from "react";
import "./Styles/Main.css";
import db from "./Assets/Damboy.eth.png";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Pinterest,
} from "@material-ui/icons";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <div className="text">
              <p>Hey There !</p>

              <h1>I am Damboy</h1>

              <p>Full-Stack Developer </p>

              <div className="icons">
                <Twitter className="icon" />

                <Instagram className="icon" />

                <Facebook className="icon" />

                <LinkedIn className="icon" />

                <Pinterest className="icon" />
              </div>

              <div className="buttons">
                <button className="btn">See Me</button>

                <button className="btn">Hire Me</button>
              </div>
            </div>
          </div>

          <div className="main__img">
            <img src={db} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
