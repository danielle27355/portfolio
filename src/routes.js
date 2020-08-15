import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Online from "./Components/Online/Online";
import Projects from "./Components/Projects/Projects";

export default (
    <Switch>
        {/* Nav bar */}
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/findmeonline" component={Online} />
        <Route exact path="/projects" component={Projects} />

    </Switch>

)