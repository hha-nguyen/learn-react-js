import React from "react";

export default function NavItems (props){
    const [isClicked, setNavItemClick] = React.useState(false);
    
    const mouseDownkNavItem = () => {
        setNavItemClick(true);
    }

    const mouseUpNavItem = () => {
        setNavItemClick(false);
    }

    return (
        <li className={`nav-item ${isClicked ? "click" : ""}`} onMouseDown={mouseDownkNavItem} onMouseUp={mouseUpNavItem}>
            <a href='#'>{props.title}</a>
        </li>
    );
}