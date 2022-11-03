import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
//import logo from "../IFblack.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLaptopCode,
  faDraftingCompass,
  faSeedling,
  faFileCode,
  faMobileAlt,
  faFileAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="py-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mt-4 border-under">About</h2>
              <p className="mt-2">
                Currently, Ian Fajardo is a Lead Full Stack Web Developer at the
                Airlines Reporting Corporation. He passionately crafts custom
                web experiences with innovative solutions for his customers. In
                his personal life, he loves doing outdoor activities, kickboxing
                and snowboarding.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="card bg-primary">
                <div className="card-body ele-3">
                  <div className="mb-3">Contact</div>
                  <div className="mb-3">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      style={{ width: "16px" }}
                      className="me-2"
                    />
                    <a
                      className="text-white"
                      href="mailto:hello@ianfajardo.com"
                    >
                      hello@ianfajardo.com
                    </a>
                  </div>

                  <div className="mb-3">
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      size="lg"
                      style={{ width: "16px" }}
                      className="me-2"
                    />
                    <a className="text-white" href="https://twitter.com">
                      @ianfajardozx
                    </a>
                  </div>

                  <div className="mb-3">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin-in"]}
                      size="lg"
                      style={{ width: "16px" }}
                      className="me-2"
                    />
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/arielianfajardo/"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-lg-1">
              <img src="IFred.png" alt="Logo" style={{ width: "50px" }} />
            </div>
            <div className="col-lg-10">
              &copy; Ian Fajardo All rights Reserved
            </div>
          </div>
        </div>
      </div>
    );
  }
}
