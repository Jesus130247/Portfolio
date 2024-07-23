import React from 'react';
import { Link } from 'react-scroll';
import darkMode from '../../assets/images/darkmode.png'
import lightMode from '../../assets/images/lightmode.png'

const Navbar = ({setViewProjects, setTheme, theme }) => {
  function handleTheme() {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }
  return (
    <>
    <nav className='navBar'>
    <div className='initials'>L.M.</div>
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    <div className='systemChange' onClick={handleTheme}>
      { theme === 'dark-mode' ? <img src={lightMode}></img> : <img src={darkMode}></img>}
    </div>
    </nav>
    </>
  );
};

export default Navbar;
