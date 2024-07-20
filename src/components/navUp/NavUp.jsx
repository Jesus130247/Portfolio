import React from 'react';
import { Link } from 'react-scroll';
import upArrow from '../../assets/images/up-arrow.png'

export default function NavUp({location}) {
    return (
        <div className='navUp'><Link to={location} smooth={true} duration={500}><img src={upArrow} alt="upArrow" /></Link></div>
    )
}