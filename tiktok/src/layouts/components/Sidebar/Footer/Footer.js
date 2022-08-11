import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import FooterLink from './FooterLink';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <footer className={cx('footer')}>
            <div className={cx('nav-link')}>
                <FooterLink title={"About"}/>
                <FooterLink title={"TikTok Browse"}/>
                <FooterLink title={"Newsroom"}/>
                <FooterLink title={"Contact"}/>
                <FooterLink title={"Careers"}/>
                <FooterLink title={"ByteDance"}/>
            </div>
            <div className={cx('nav-link')}>
                <FooterLink title={"TikTok for Good"}/>
                <FooterLink title={"Advertise"}/>
                <FooterLink title={"Newsroom"}/>
                <FooterLink title={"Contact"}/>
                <FooterLink title={"Careers"}/>
                <FooterLink title={"ByteDance"}/>
            </div>
            <div className={cx('nav-link')}>
                <FooterLink title={"Help"}/>
                <FooterLink title={"Safety"}/>
                <FooterLink title={"Terms"}/>
                <FooterLink title={"Privacy"}/>
                <FooterLink title={"Creator Portal"}/>
                <FooterLink title={"Community Guidelines"}/>
            </div>

            <div className={cx('copyright')}>
                © 2022 TikTok
            </div>
        </footer>    
    );
}

export default Footer;
