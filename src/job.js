import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";

class Job extends Component {
  render() {
    return (
      <div className={"row"}>
        <div
          className={(isMobile() ? "two" : "one")}
          style={{ paddingRight: "0px", paddingTop: "1.6em" }}
        >
          {this.props.img && (
            <img
              src={this.props.img}
              alt={this.props.name}
              className={"ui rounded image"}
            />
          )}
        </div>
        <div className={(isMobile() ? "fourteen" : "fifteen") + " wide column"}>
          <div className={"ui small header hel"}>
            <span style={{ fontSize: "80%", opacity: 0.5, fontWeight: 400 }}>
              {this.props.date}
              <br />
            </span>
            {this.props.url ? (
              <a href={this.props.url}>
                {this.props.name}{" "}
                <span>
                  {" "}
                  <i
                    className={
                      "small disabled grey " + this.props.icon + " icon"
                    }
                  />
                </span>
              </a>
            ) : (
              this.props.name
            )}
            <div className={"sub header hel"}>{this.props.desc}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
