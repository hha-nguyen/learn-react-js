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

function Home({ title, login = true, ...props }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<QRIcon />}>
                    Use QR code
                </Button>
            </div>
            <div className={cx('btn-wrapper')}>
                {login ? (
                    <Button
                        text
                        leftIcon={<PersonIcon />}
                        onClick={() => props.handleClickBtn(false)}
                    >
                        Use phone / email / username
                    </Button>
                ) : (
                    <Button
                        text
                        leftIcon={<PersonIcon />}
                        onClick={() => {
                            props.handleSignIn(false, true);
                        }}
                    >
                        Use phone or email
                    </Button>
                )}
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<FacebookIcon />}>
                    Continue with Facebook
                </Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<GoogleIcon />}>
                    Continue with Google
                </Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<TwitterIcon />}>
                    Continue with Twitter
                </Button>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button text leftIcon={<LineIcon />}>
                    Continue with LINE
                </Button>
            </div>
        </div>
    );
}

export default Home;
