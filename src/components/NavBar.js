import React from 'react';
import '../styles/NavBar.css';

export const NavBar = ()=>{
    return(
        <header>
            <nav className='menu-toggle'>
                <li> <a href="#start">Start</a>  </li>
                <li> <a href="#meetme">Meet me</a>  </li>
                <li> <a href="#meetme">Studies</a>  </li>
                <li> <a href="#skills">Skills</a>  </li>
                <li> <a href="#contact">Contact</a>  </li>
            </nav>
        </header>
    );
};