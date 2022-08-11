import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
// import { useState } from 'react';

import { hastagData } from './Hastag';
import Hastag from './Hastag';

const cx = classNames.bind(styles);

function Discover() {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Discover</p>
            
            <div className={cx('hastag-container')}>
                {hastagData.map((hastag, index) => {
                    return (
                        <Hastag 
                            icon={hastag.icon}
                            title={hastag.title}
                            key={index}
                        />
                    )
                })}
            </div>
            
        </div>   
    );
}

export default Discover;