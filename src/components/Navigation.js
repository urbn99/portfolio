import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import { FaBars } from 'react-icons/fa';



const Navigation = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className='nav-center'>

                <div className='nav-header'>
                    
                    <h3  className='logo'>Marcin Urbański</h3>

                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>


                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        <Link to='/about'>
                            <li>
                                O MNIE
                            </li>
                        </Link>
                        
                        <Link to='/portfolio'>
                            <li>
                                PORTFOLIO
                            </li>
                        </Link>
                        <Link to='/cv'>
                            <li>
                                CV
                            </li>
                        </Link>
                        <Link to='/skills'>
                            <li>
                                UMIEJĘTNOŚCI
                            </li>
                        </Link>
                        <Link to='/contact'>
                            <li>
                                KONTAKT
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navigation
