import React, { Component } from 'react';
import './App.css';

class Person extends Component {
  render() {
    return (
      <div className={'stretched column'}>
        <a href={this.props.url}>
        <div className={'person'}>
          <div className={'ui tiny header hel'}>
            {this.props.name}
            <div className={'sub header hel'}>
              {this.props.desc} {this.props.location}
            </div>
          </div>
        </div>
        </a>
      </div>
    );
  }
}

export default Person;