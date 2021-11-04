import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import LoveToDo from "./Components/LoveToDo/LoveToDo";
import Projects from "./Components/Projects/Projects";
import Skill from "./Components/Skill/Skill";

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
