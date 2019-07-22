import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

export default (
    <Switch>
        {/* Nav bar */}
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={About} />

    </Switch>

)