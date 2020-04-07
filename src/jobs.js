import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";
import Job from "./job.js";

class Jobs extends Component {
  render() {
    let jobs = [
      [
        "End-to-end UX/UI Design",
        null,
        null,
        "This is my wheelhouse. I thrive when I’m able to operate at every stage in the end-to-end design process. This typically includes conducting user research, low fidelity ideation, high fidelity design, prototyping, and validation testing. The best user experiences are designed by those who are deeply connected with the issue at hand.",
        "/logo_consulting.png",
        null
      ],
      [
        "Visual + Graphic Design",
        null,
        null,
        "I love pushing pixels. It’s as simple as that. In fact, I love it so much that I even do it in my spare time. Whether I’m designing a logo for an imaginary company or making a geofilter for Snapchat, I have a hankering for expressing my ideas visually. They say that if you’re good at something, never do it for free… now all I need is someone to pay me.",
        "/logo_bg.png",
        "2017-Present",
        null
      ],
      [
        "Branding Design",
        null,
        null,
        "My background in marketing taught me the importance — nay, the dire necessity — of deeply understanding how others perceive and consume digital content. Developing a strong brand identity goes beyond having a cool logo; it’s the way in which the world understands your business. ",
        "/logo_svangel.jpg",
        null
      ],
      [
        "Creative Direction",
        null,
        null,
        "Ideas are great. They encourage us to evolve as a species. They can, however, be challenging to implement — some of the best ideas are. If you’re stuck and/or need a helping hand with your idea, shoot me an email. I’m always up for a challenge.  ",
        "/logo_forbes.png",
        "newspaper"
      ],
    ];
    return (
      <div className={"ui " + (isMobile() ? "" : "padded") + " grid"}>
        {jobs.map(i => {
          return (
            <Job
              key={i[0]}
              name={i[0]}
              date={i[1]}
              url={i[2]}
              desc={i[3]}
              // img={i[4]}
              // icon={i[5]}
            />
          );
        })}
      </div>
    );
  }
}

export default Jobs;
