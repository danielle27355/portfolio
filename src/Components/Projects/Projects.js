import React, { Component } from "react";
import './Projects.css';
import kitties from './kittiesSS.png';
import Fade from 'react-reveal/Fade';

class Projects extends Component {
    render() {
      return (
        // <div className="Projects">
        //   <div className="Title">Projects</div>

        //   <div>
            
        //     <div className="projectOne">
        //       <div className="p1Title">Kittens Annihilate</div>
        //       <br/>
        //     I made a choose your own adventure game called Kittens Annihilate. The technologies I used in this project were React.js, Node.js, JavaScript, HTML/CSS, PostgreSQL, Express, Stripe, and Twilio. 

            
        //     <br/>
        //     <br/>
        //     This game had a variety of features and unique details to it. A user can register a username and password. The game will check if the user is already registered. If not, the user is prompted to register instead, and then they can log in. The login system also checks to see if a user doesn't exist. If the username is not found, the user will be prompted to register.
        //     <br/>
        //     <br/>
        //     The player of the game is able to track their game history. A list of their history will be displayed, showing all of the games that they played and the moves they made during the game. The user is then able to delete games from their history list, which would delete the history directly from the database.
        //     <br/>
        //     <br/>
        //     A nice addition I made to this project is that a user can pay to buy cheat codes for the game and those would be texted to the user so they can win. The payment would be accpeted using Stripe and the codes would be texted to the user using Twilio.
        //     <br />
        //     <br />
        //     <img src={kitties} class="kitties" />
        //     </div>


            
          
        //     <div className="RightSide">
        //     <div className="projectTwo">
        //     <div className="p2Title">ComicGen</div>
        //     <br/>
        //     This project is a comic generator called ComicGen. It uses technologies such as React Komik built on Fabric.js, React.js, Redux, Node.js, JavaScript, HTML/CSS, PostgreSQL, Express.
        //     <br/>
        //     <br/>
        //     A user can add in backgrounds, character images, comment and thought bubbles. They can register and log into the system, create a profile, and can also save and download the comic images they create. The user can also view other users' creations and comment or react to them.
        //     <br/>
        //     <br/>

        //     </div>



        //     <div className="projectThree">
        //       <div className="p3Title">Women of STEM</div>
        //       <br/>
        //       This project is a website based off of the book Women in Science. As a female entering the STEM field, I thought it would be nice to build a website that feels encouraging for me and the other females I know that sometimes get discouraged entering this industry. This project uses React.js, JavaScript, HTML/CSS.
        //     </div>
        //     </div>
            
        //   </div>
           
        // </div> 



        <div classname="projects">

          <h1>
           <Fade bottom cascade><div className="projects-title">Projects</div></Fade> 
          </h1>


          <div>
            <h2 className="projectSites"> 
              <Fade bottom cascade>
                <a href="https://www.linkedin.com/in/danielle-wenzel/" id="projectLinks">Project 1</a>
              </Fade>
              <Fade bottom cascade>
                <a href='https://github.com/danielle27355' id="projectLinks">Project 2</a>
              </Fade> 
            </h2>
            <h2 className="projectSites">
              <Fade bottom cascade>
                <a href='https://github.com/danielle27355' id="projectLinks">Project 3</a>
              </Fade> 
              <Fade bottom cascade>
                <a href='https://github.com/danielle27355' id="projectLinks">Project 4</a>
              </Fade> 
            </h2>
          </div>
        

        </div>

      );
    }
  }
  
  export default Projects;