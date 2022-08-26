import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import {
    FacebookIcon,
    GoogleIcon,
    LineIcon,
    PersonIcon,
    QRIcon,
    TwitterIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import React from 'react';

const cx = classNames.bind(styles);


function Home(props){

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                Log in to TikTok
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<QRIcon />} >Use QR code</Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<PersonIcon />} onClick={() => props.handleClickBtn(true)}>Use phone / email / username</Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<FacebookIcon />}>Continue with Facebook</Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<GoogleIcon />}>Continue with Google</Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<TwitterIcon />}>Continue with Twitter</Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<LineIcon />}>Continue with LINE</Button>
            </div>
        </div>
    );
}
    


export default Home;