import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";
import Project from "./project.js";

class Projects extends Component {
  render() {
    let projects = [
      [
        "Dashboard Design",
        "In a six week sprint, I researched, designed and prototyped a dashboard for a visual feedback tool to help users navigate and manage their projects",
        "http://asherdawson.org/planogy",
        "/logo_van.png",
        "2019",
      ],
      [
        "Enterprise Advanced Search",
        "Over the course of six weeks, I designed and iterated on an enterprise advanced search feature for Craft.co, a market research tool for business analysts",
        "http://asherdawson.org/craft",
        "/logo_saladbowl.png",
        "2019",
      ],
      [
        "Really Good UX",
        "Inbound marketing blog designed and built for Appcues using Webflow CMS",
        "http://asherdawson.org/really-good-ux",
        "/logo_halo.png",
        "2017",
        "globe"
      ],
      [
        "Twitch Mobile Onboarding",
        "In a two week case study, I ran usability tests on the Twitch mobile app to identify and solve user pain points during the onboarding process",
        "http://asherdawson.org/twitch-case-study",
        "/logo_jotpocket.png",
        "2019",
        "mobile alternate"
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
              // img={i[3]}
              date={i[4]}
              // icon={i[5]}
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;
