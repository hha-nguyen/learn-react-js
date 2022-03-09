import React from 'react';
import logo from '../img/react-logo.png';

export default function Header() {
    return (
        <header>
        <nav className='nav'>
            <img className='nav-logo' src={ logo } alt='React logo' width='40px'/>
            <ul className='nav-items'>
            <li className='nav-item'>Pricing</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Contact</li>
            </ul>
        </nav>
        </header>
    );
}
