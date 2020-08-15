import React, { Component } from "react";
import './About.css';
import debussy from './debussy.jpg';
import mastodon from './mastodon.jpg';
import me from './me.jpg';
import slayer from './slayer.jpg';

import Fade from 'react-reveal/Fade';

class About extends Component {
    render() {
      return (
      // <div className="Page">
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
      //   <br/>
        

      //   <h1>
      //     <Fade bottom cascade><div className="AboutTitle">About Me!</div></Fade>
      //   </h1>
      //     <div className="AboutTitle">About Me!</div>
          
      //   <div className="About">


      //   <div className="text">
      //     Hello and welcome to my website!
      //     <br/> 
      //     <br/> 
      //     My name is Danielle Wenzel. I am a fullstack web developer residing in Phoenix, Arizona who loves to make unique and creative websites. I attended a full stack web development bootcamp in the beginning of 2019. While there I learned how to code full stack web applications using technologies and languages such as PostgreSQL, Express, React.js, Node.js, and JavaScript. Since I have finished the bootcamp, I have been polishing those skills as well as rapidly gaining new skills in technologies like MongoDB, Java, and Python among others. I enjoy crafting my coding skills by tackling interesting and unusal projects. When I'm not working on websites, I love listening to music, going to concerts, and having conversations with every kitty that I meet!
      //       </div> 



      //     <div className="AboutTitle">About Me!</div>
      //       <div className="text">
      //     Hello!
      //     <br/> 
      //     <br/> 
      //     My name is Danielle Wenzel. I am a fullstack web developer residing in Phoenix, Arizona who loves to make unique and creative websites. A lot of my experience is working with PostgreSQL, Express, React.js, Node.js, and JavaScript. I am also rapidly gaining new skills in technologies like MongoDB, Java, and Python among others. I enjoy crafting my coding skills by tackling interesting and unusal projects. When I'm not working on websites, I love to listen to music, going to concerts, and have conversations with every kitty that I meet!
      //       </div>

      //     <div>
      //         <div>
      //           <img src={me} class="me" />
      //           <br/>
      //           <div className="captions">This is me!</div>
      //         </div>
              

      //         <div> 
      //           <img src={slayer} class="slayer"/>
      //           <br/>
      //           <div className="captions">This is from a Slayer concert during their final world tour!</div>
                 
      //         </div>

      //     </div>
      //     <div>
      //       <div>
      //           <img src={debussy} class="debussy"/>
      //           <br/>
      //           <div className="captions">This is my son Debussy.</div>
      //         </div>
             
      //         <div>
      //           <img src={mastodon} class="mastodon" />
      //           <br/>
      //           <div className="captions">This is one of my favorite bands at their concert, Mastodon. </div>
      //           This is Mastodonnn
      //         </div>

      //     </div>
         
      //   </div>
      //   </div>



        <h1>
           <Fade bottom cascade><div className="about-title">About Me!</div></Fade> 
         </h1>
         

        

      );
    }
  }
  
  export default About;