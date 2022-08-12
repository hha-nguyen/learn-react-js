import classNames from "classnames/bind";
import styles from './Scrollbar.module.scss';
import React, { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Scrollbar({
    children,
    className,
    ...props
}) {
    const [thumbHeight, setThumbHeight] = useState(20);
    const contentRef = useRef();
    const scrollTrackRef = useRef();
    const scrollThumbRef = useRef();
    const observer = useRef<ResizeObserver | null>(null);

    function handleResize(ref, trackSize) {
        const { clientHeight, scrollHeight } = ref;
        setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
    }
    
    // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
    useEffect(() => {
        if (contentRef.current && scrollTrackRef.current) {
        const ref = contentRef.current;
        const {clientHeight: trackSize} = scrollTrackRef.current;
        observer.current = new ResizeObserver(() => {
            handleResize(ref, trackSize);
        });
        observer.current.observe(ref);
        return () => {
            observer.current?.unobserve(ref);
        };
        }
    }, []);

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('track-and-thumb')}>
                <div className={cx('track')}></div>
                <div className={cx('thumb')}></div>
            </div>
        </div>    
    );
}

export default Scrollbar;