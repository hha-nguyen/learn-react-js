import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { CloseIcon } from '~/components/Icons';
import React from 'react';
import { useState } from 'react';

import Home from '~/layouts/components/Header/Auth/components/Home';
import UsernameLogin from './components/UsernameLogin/UsernameLogin';

const cx = classNames.bind(styles);

function Auth(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleSignInClick = () => {
        
    }

    return (
        <div className={cx('modal-container')}>
            <div className={cx('content-container')}>
                <div className={cx('modal-content')}>
                    <div className={cx('login-container')}>
                        <div className={cx('login-wrapper')}>
                            {isClicked ===
                            false ? (
                                <Home handleClickBtn={isClicked => setIsClicked(isClicked)}/>
                            ) : (
                                <UsernameLogin />
                            )}
                        </div>
                    </div>
                    <div className={cx('modal-footer')}>
                        <div className={cx('footer-title')}>
                            Don’t have an account?
                        </div>
                        <div className={cx('sign-up-btn')} onClick={() => handleSignInClick()}>
                            Sign up
                        </div>
                    </div>
                </div>
                <div className={cx('close-btn-wrapper')} onClick={() => props.handleClickCloseBtn(false)}>
                    <CloseIcon width="15px" height="15px" />
                </div>
            </div>
        </div>
    );
}

export default Auth;
