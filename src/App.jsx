import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Footerr from './components/Footerr';


function App() {
  return (
    <Router>
      <div className="bg-primary text-secondary">
        <Nav />
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Service/>
        <Contact/>
       <Footerr/>
      </div>
    </Router>
  );
}

export default App;