import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio'
import { useState } from 'react';
import Footer from './components/footer/footer';
import "./index.css"

import { createContext } from 'react';
export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark-mode')
  const [viewProjects, setViewProjects] = useState(true)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className='app' id={theme}>
        <Navbar setViewProjects={setViewProjects} setTheme={setTheme} theme={theme}/>
        <Home />
        <About />
        <Portfolio viewProjects={viewProjects} setViewProjects={setViewProjects}/>
        <Contact />
        <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
