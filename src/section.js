import React, { Component } from "react";
import "./App.css";
import { isMobile } from "./utils.js";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: null
    };
  }
  render() {
    return (
      <div className={"ui basic padded segment"} key={this.props.name}>
        <div className={"ui grid"}>
          <div
            className={"row sectionHeader " + (this.state.tab === this.props.name ? "active" : null )}
            style={{ cursor: "pointer" }}
            onClick={() =>
              this.setState({
                tab: this.state.tab === this.props.name ? null : this.props.name
              })
            }
          >
            <div className={"fourteen wide column"}>
              <div
                className={
                  "ui header hel " +
                  (!isMobile() &&
                    (this.state.tab === this.props.name
                      ? this.props.color
                      : "sectionHeader"))
                }
                style={{ fontWeight: "500" }}
              >
                {isMobile() ? this.props.name : this.props.desc}
                {isMobile() && (
                  <div className={"sub header hel"}>{this.props.desc}</div>
                )}
              </div>
            </div>
            <div className={"two wide right aligned middle aligned column"}>
              <i
                className={
                  "chevron " +
                  (this.state.tab === this.props.name ? "up" : "down") +
                  " disabled icon"
                }
              />
            </div>
            {this.state.tab === this.props.name && (
              <div className={"sixteen wide column"} style={{paddingLeft:0, paddingTop:5}}> {this.props.title}
              </div>
          )}

          </div>
        </div>
      </div>
    );
  }
}

export default Section;
