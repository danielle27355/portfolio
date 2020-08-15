import React, { Component } from "react";
import './Home.css';
import Fade from 'react-reveal/Fade';

class Home extends Component {
    render() {
      return (
        <div className="Home">

          <h1 className="intro">
          <Fade bottom cascade>
            Hello! You found me!<br/>
            I am Danielle Wenzel,<br/> 
            A fullstack web developer<br/>
            looking for new opportunities. 
            </Fade>
            </h1>
            
        </div>
      );
    }
  }
  
  export default Home;