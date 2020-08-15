import React from 'react';
// import {HashRouter} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from "./routes";
import Nav from './Components/Nav/Nav';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Online from "./Components/Online/Online";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <BrowserRouter> 
    {/* <HashRouter> */}
      <div className="App">
      <Nav />
      {/* {routes} */}
      <Home/>
      <About/>
      <Projects/>
      <Online/>
      


      </div>
    {/* </HashRouter> */}
    </BrowserRouter>
  );
}

export default App;
