import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio'
import { useState } from 'react';

function App() {
  const [viewProjects, setViewProjects] = useState(true)
  return (
    <div>
      <Navbar setViewProjects={setViewProjects}/>
      <Home />
      <About />
      <Portfolio viewProjects={viewProjects} setViewProjects={setViewProjects}/>
      <Contact />
  </div>
  )
}

export default App
