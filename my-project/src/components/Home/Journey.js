import React from 'react';
import logo from '../../img/react-logo.png';

export default function Journey(props) {
    return (
        <div className='journey-item show'>
            <div className='journey-img'>
                <img src={props.img} alt=''></img>
            </div>
            <div className='journey-content'>
                <h5 className='journey-title'>{props.title}</h5>
                <h6 className='journey-date'>{props.date}</h6>
                <p className='journey-desc'>{props.desc}</p>
                <p className='journey-continue'>{props.continue}</p>
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