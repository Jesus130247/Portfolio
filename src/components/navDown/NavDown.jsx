import React from 'react';
import { Link } from 'react-scroll';
import downArrow from '../../assets/images/down-arrow.png'

export default function NavDown({location}) {
    return (
        <div className='navDown'><Link to={location} smooth={true} duration={500}><img src={downArrow} alt="downArrow" /></Link></div>
    )
}