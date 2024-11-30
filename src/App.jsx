import React from 'react';
import './App.css';
import Header from './components/Header'; // Assuming you have this file
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
