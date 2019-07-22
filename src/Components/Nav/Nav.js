import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Nav.css'
import logo from "./logo.png";

class Nav extends Component{ 
    render(){

        return(
            <div className="Nav">

                <ul className="unLi">

                    <div className="home" id="myResNav">
                        <div>
                            <Link to="/"><img className="logo" src={logo} alt="Logo" width="50px" /></Link>
                        </div>
                    </div>

                    <div  className="resNav" id="myResNav">
                        <div className="aboutme" id="links">
                            <Link to="/aboutme">About Me</Link>
                        </div>
                        <div className="projects" id="links">
                            <Link to="/projects">Projects</Link>
                        </div>
                        {/* <div className="contactme" id="links">
                            <Link to="/contactme">Contact Me</Link>
                        </div> */}
                        <div className="findmeonline" id="links">
                            <Link to="/findmeonline">Find Me Online</Link>
                        </div>
                    </div>
                </ul>

            </div>
        )
    }
}

export default Nav;