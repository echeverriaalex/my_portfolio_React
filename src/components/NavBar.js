import React from 'react';
import '../styles/NavBar.css';

export const NavBar = ()=>{
    return(
        <header>
            <nav>
                <label className='menu-label' for="menu-toggle">
                    <img className='img-menu' src='https://img.icons8.com/?size=100&id=PpSBa7iaIak3&format=png&color=000000' alt='logo-menu'/>
                    <img className='cross-menu' src='https://img.icons8.com/?size=100&id=38840&format=png&color=000000' alt='logo-menu'/>
                </label>
                <input type="checkbox" id="menu-toggle"/>
                <ul className='navbar-list'>
                    <li className='item-menu'>
                        <img src='https://img.icons8.com/?size=100&id=91234&format=png&color=000000' alt='Inicio'/>
                        <a href="#start">Inicio</a>
                    </li>
                    <li className='item-menu'>
                        <img src='https://img.icons8.com/?size=100&id=68762&format=png&color=000000' alt='Cónoceme'/>
                        <a href="#meetme">Cónoceme</a>
                    </li>
                    <li className='item-menu'>
                        <img src='https://img.icons8.com/?size=100&id=12KiRC81sMRC&format=png&color=000000' alt='Estudios'/>
                        <a href="#studies">Estudios</a>
                    </li>
                    <li className='item-menu'>
                        <img src='https://img.icons8.com/?size=100&id=6Om7galoLueR&format=png&color=000000' alt='Proyectos'/>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className='item-menu'>
                        <img src='https://img.icons8.com/?size=100&id=120522&format=png&color=000000' alt='Habilidades'/>
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li className='item-menu'>
                        <img src='https://img.icons8.com/?size=100&id=91299&format=png&color=000000' alt='Contacto'/>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};