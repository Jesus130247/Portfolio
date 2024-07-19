import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({setViewProjects}) => {
  return (
    <>
    <nav className='navBar'>
    <div className='initials'>L.M</div>
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    <div className='systemChange'>☾🦇</div>
    </nav>
    </>
  );
};

export default Navbar;
