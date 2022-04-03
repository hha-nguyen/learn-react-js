import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

export default function Journey(props) {
    const [solidIcon, setSolidIcon] = React.useState(false);
    
    const clickIcon = () => {
        if (!solidIcon) {
            setSolidIcon(true);
        } else setSolidIcon(false);
    }

    const overlayColor = {
        backgroundColor: `${props.overlayColor}`
    }

    return (
        <div className='journey-item show'>
            <div className='journey-img'>
                <img src={`/img/${props.img}`} alt=''></img>
            </div>
            <div className='journey-content'>
                <h5 className='journey-title'>{props.title}</h5>
                <h6 className='journey-date'>{props.date}</h6>
                <p className='journey-desc'>{props.desc}</p>
            </div>
            <div className='journey-overlay' style={overlayColor}>
                <div className='journey-icon'>
                    <div className={`journey-heart ${solidIcon ? "click" : ""}`} onClick={clickIcon}>
                        <FontAwesomeIcon id='heart-icon' icon={faHeart}></FontAwesomeIcon>
                    </div>
                    <div className='journey-comment'>
                        <FontAwesomeIcon id='comment-icon' className={``} icon={faComment}></FontAwesomeIcon>       
                    </div>
                </div>
                <button className='journey-continue'>{props.continue}</button>
            </div>
        </div>
    );
}

// Journey.propsTypes = {
//     img: React.propsTypes.string,
//     title: React.propsTypes.string.isRequired,
//     date: React.propsTypes.string,
//     desc: React.propsTypes.string,
//     continue: React.propsTypes.string,
// }

// Journey.defaultProps = {
//     title: 'Journey item title'
// }