import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";

class Link extends Component {
  render() {
    return (
      <a className={"icon item"} href={this.props.url}>
        <i className={this.props.icon + " grey disabled icon"} />
      </a>
    );
  }
}

class Links extends Component {
  render() {
    let links = [
      ["instagram", "http://instagram.com/abramdawson"],
      ["twitter", "https://twitter.com/abram"],
      ["linkedin", "https://www.linkedin.com/in/abramdawson"],
      ["github", "https://github.com/abramdawson"]
    ];
    return (
      <div className={"right icon menu"}>
        {links.map(i => {
          return <Link key={i[0]} icon={i[0]} url={i[1]} />;
        })}
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div className={"ui fluid secondary menu"}>
        <div className={"fitted item"}>
          <div className={"ui header hel"} style={{ fontWeight: "700" }}>
            Abram {isMobile() ? "" : "Dawson"}
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
