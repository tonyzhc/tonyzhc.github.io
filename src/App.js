import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar';
import About from './components/About';
import Academics from './components/Academics';
import Projects from './components/Projects';

function App() {

  return (
    <Router>
      <NavBar/>

      <Route path="/" exact component={About}></Route>
      <Route path="/academics/" component={Academics}></Route>
      <Route path="/projects/" component={Projects}></Route>
    </Router>
  );
}

export default App;
