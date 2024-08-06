import React from 'react';
import { Link } from 'react-scroll';
import downArrow from '../../assets/images/drop-down.png'
import upArrow from '../../assets/images/up-arrow2.png'
import { useState, useEffect } from 'react';

export default function NavDown() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [positionsArray, setPositionsArray] = useState([null, 'about'])
    function trackScrollPosition() {
        const position = window.scrollY;
        setScrollPosition(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', trackScrollPosition)
        return () => {
            window.removeEventListener('scroll', trackScrollPosition)
        }
    })
    useEffect(() => {
        if (scrollPosition > 0 ) {
            setPositionsArray([null, 'about'])
        } if (scrollPosition >= 100) {
            setPositionsArray(['home', 'portfolio'])
        } if (scrollPosition >= 1920) {
            setPositionsArray(['about', 'contact'])
        } if (scrollPosition >= 2940) {
            setPositionsArray(['portfolio', null])
        }
    }, [scrollPosition])
    return (
        <>
        {positionsArray[0] 
        ? <div className='navUp appear'><Link to={positionsArray[0]} smooth={true} duration={500}><img src={upArrow} alt="upArrow" /></Link></div> 
        : <div className='navUp hide'><Link to={positionsArray[0]} smooth={true} duration={500}><img src={upArrow} alt="upArrow" /></Link></div> }
        {positionsArray[1] 
        ? <div className='navDown appear'><Link to={positionsArray[1]} smooth={true} duration={500}><img src={downArrow} alt="downArrow" /></Link></div> 
        : <div className='navDown hide'><Link to={positionsArray[1]} smooth={true} duration={500}><img src={downArrow} alt="downArrow" /></Link></div> }
        </>
    )
}