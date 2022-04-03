import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import NavData from './NavData';
import NavItems from './NavItems';

export default function Header() {
    const navItems = NavData.map(navItem =>
        <NavItems 
            key={navItem.id}
            title={navItem.title}
        />
    );
    const [isHided, setNavHide] = React.useState(false);
    const [showBtn, setBtnShow] = React.useState(false);

    const hideNav = () => {
        setNavHide(true);
        setBtnShow(true);
    }
    const showNav = () => {
        setNavHide(false);
        setBtnShow(false);
    }

    return (
        <header className='header'>
        <nav className={`nav ${isHided ? "hide" : ""}`}> 
            <img className='nav-logo' src='/img/react-logo.png' alt='React logo' width='40px'/>
            <h1 className='nav-title'>Mesto</h1>
            <ul className='nav-items'>
                {navItems}  
            </ul>
            <FontAwesomeIcon id="hide-nav" className={`${showBtn ? "start" : ""}`} icon={faArrowUpFromBracket} onClick={hideNav}/>
        </nav>
        <FontAwesomeIcon id="show-nav" className={`${showBtn ? "start" : ""}`} icon={faArrowDown} onClick={showNav}/>
        </header>
    );
}
