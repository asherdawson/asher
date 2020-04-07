import React, { Component } from 'react';
import './App.css';
import { isMobile } from './utils.js';

class Project extends Component {
  render() {
    return (
      <div className={'row'} style={{paddingTop:10, paddingBottom:10}}>
        
        <div className={'twelve wide column'}>
          <div className={'ui small header hel'}>
            <div style={{ paddingBottom:5 }}>
            <span
              style={{ fontSize: '80%', opacity: 0.5, fontWeight: 400 }}
            >
              {this.props.date}<br/>
            </span>
            <div style={{ paddingTop:2, paddingBottom:2 }}>
            {this.props.url ? 
              (<a href={this.props.url} target="_blank">
                {this.props.name} 
              </a>) :
              (this.props.name)
            }
            </div>
            <div className={'sub header hel'}>
              {this.props.desc}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;