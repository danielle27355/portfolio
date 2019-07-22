import React, { Component } from "react";
import './About.css';
import debussy from './debussy.jpg';
import mastodon from './mastodon.jpg';
import me from './me.jpg';
import slayer from './slayer.jpg';

class About extends Component {
    render() {
      return (
        <div className="About">
            <div className="text">
          Hello, my name is Danielle Wenzel. I am a fullstack web developer residing in Phoenix, Arizona who loves to make unique and creative websites. I enjoy crafting my coding skills by tackling interesting and unusal projects. When I'm not working on websites, I love to listen to music and have conversations with every kitty that I meet!
            </div>

          <div>
              <div>
                <img src={me} class="me" />
                This is meeee
              </div>
              <div>
                <img src={debussy} class="debussy"/>
                This is Debussy
              </div>
              <div>
                <img src={mastodon} class="mastodon" />
                This is Mastodonnn
              </div>
              <div> 
                <img src={slayer} class="slayer"/>
                This is Slayerrr
              </div>
          </div>
        </div>

      );
    }
  }
  
  export default About;