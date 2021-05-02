import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Intro from './component/Intro/Intro';
import About from './component/About/About';
import Skill from './component/Skill/Skill';
import LoveToDo from './component/LoveToDo/LoveToDo';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import {  Route, Router, Switch } from 'react-router';

function App() {

  return (<>
    
    <Router>
      <Switch>

        <Route path="/">
          <Header/>
        </Route>

        <Route path="/header">
          <Header />
        </Route>

        <Route path="/intro">
          <Intro />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/skill">
          <Skill />
        </Route>

        <Route path="/loveToDo">
          <LoveToDo />
        </Route>


        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/footer">
          <Footer />
        </Route>
        
        <Route exact path="*">
          <Header />
        </Route>

      </Switch>
    </Router>

  </>);
}

export default App;
