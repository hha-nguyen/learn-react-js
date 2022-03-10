import React from 'react';
import logo from '../img/react-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
        <nav className='nav'>
            <img className='nav-logo' src={ logo } alt='React logo' width='40px'/>
            <h1 className='nav-title'>Mesto</h1>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <a href='#'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>My Journey</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>About Me</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>Contact</a>
                </li>
            </ul>
            <FontAwesomeIcon id='hide-nav' icon={faArrowUpFromBracket}/>
        </nav>
        <FontAwesomeIcon id='show-nav' icon={faArrowDown}/>
        </header>
    );
}
