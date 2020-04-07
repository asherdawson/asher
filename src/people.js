import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";
import Project from "./project.js";

class Projects extends Component {
  render() {
    let projects = [
      [
        "Logo Design",
        "Corporate logos for real + imaginary companies",
        "http://asherdawson.org/logo-design",
        "/logo_van.png",
        "2017-2020",
      ],
      [
        "Branding + Packaging Design",
        "Coming soon...!",
        null,
        null,
        "2020",
      ],
       [
        "Other Creative Things",
        "Pixels, ceramics, watercolors and a bunch of other stuff.",
        "http://asherdawson.org/creative",
        "/logo_saladbowl.png",
        "2015-2020",
      ],
    ];
    return (
      <div className={"ui " + (isMobile() ? "" : "padded") + " grid"}>
        {projects.map(i => {
          return (
            <Project
              key={i[0]}
              name={i[0]}
              desc={i[1]}
              url={i[2]}
              img={i[3]}
              date={i[4]}
              icon={i[5]}
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;