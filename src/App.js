import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";

import Section from "./section.js";
import Projects from "./projects.js";
import People from "./people.js";
import Jobs from "./jobs.js";

class Sections extends Component {
  render() {
    let sections = [
      ["Projects", "Contracts + Case Studies", <Projects />, "grey"],
      ["Graphic Design", "Visual + Graphic Design", <People />, "grey"],
      ["Services", "Services", <Jobs />, "grey"]
    ];
    return (
      <div>
        {sections.map(i => {
          return (
            <Section
              name={i[0]}
              key={i[0]}
              desc={i[1]}
              title={i[2]}
              color={i[3]}
            />
          );
        })}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <div
          className={"ui text container"}
          style={{ paddingTop: isMobile() ? "10px" : "50px" }}
        >
        {/*<div className={"ui basic padded segment"}>*/}
          <p className={"hel"} style={{ paddingTop:50, paddingBottom:50 }}>
            Hey there <strong>: waving hand emoji :</strong> My name's Asher. 
            I'm an end-to-end UX/UI designer based in San Francisco, CA. Before 
            transitioning to design, I helped SaaS startups build out marketing 
            content, which is where I developed a deep curiosity for understanding 
            how users experience digitial content. I'm currently honing my design 
            skills + aquiring new ones while freelancing for startups around the 
            Bay Area. <a href="https://www.asherdawson.org/contact" target="_blank">
            <u>Holler</u></a> if you'd like to get in touch. 
          </p>
          {/*</div>*/}
          <Sections />
        
{/* This is Asher's button leading to his portfolio */} 

      <div style={{ paddingTop:50, paddingBottom:50 }}>  
        <a href="https://www.asherdawson.org/" target="_blank">  
          <div class="ui animated button">
            <div class="visible content">Portfolio</div>
              <div class="hidden content">
                <i class="right arrow icon"></i>
              </div>
            </div> 
        </a> 
      </div>


        </div>
      </div>
    );
  }
}

export default App;
