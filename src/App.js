import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Modules/About/About";
import Contact from "./Modules/Contact/Contact";
import Footer from "./Modules/Footer/Footer";
import Header from "./Modules/Header/Header";
import Intro from "./Modules/Intro/Intro";
import LoveToDo from "./Modules/LoveToDo/LoveToDo";
import Projects from "./Modules/Projects/Projects";
import Skill from "./Modules/Skill/Skill";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Intro />
            <About />
            <Skill />
            <LoveToDo />
            <Projects />
            <Contact />
          </Route>

          <Route path="/intro">
            <Intro />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/skill">
            <Skill />
            <LoveToDo />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <Intro />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
