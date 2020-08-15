import React, { Component } from "react";
import './Online.css';

import Fade from 'react-reveal/Fade';

class Online extends Component {
    render() {
      return (
        <div className="online">
          <h1>
            <Fade bottom cascade><div className="online-title">Find me online!</div></Fade>
          </h1>
          
          <div>
            <h2 className="onlineSites"> 
              <Fade bottom cascade>
                <a href="https://www.linkedin.com/in/danielle-wenzel/" id="onlineLinks">LinkedIn</a>
              </Fade>
              <Fade bottom cascade>
                <a href='https://github.com/danielle27355' id="onlineLinks">GitHub</a>
              </Fade> 
            </h2>
            <h2 className="onlineSites">
              <Fade bottom cascade>
                <a href='https://github.com/danielle27355' id="onlineLinks">GitHub</a>
              </Fade> 
            </h2>
          </div>
        </div>
      );
    }
  }
  
  export default Online;