import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { CloseIcon } from '~/components/Icons';
import React from 'react';
import { useState } from 'react';

import Home from '~/layouts/components/Header/Auth/components/Home';
import UsernameLogin from './components/UsernameLogin/UsernameLogin';
import SignIn from './components/SignIn';

const cx = classNames.bind(styles);

function Auth(props) {
    const [isHome, setIsHome] = useState(true);
    const [isSignInHome, setIsSignInHome] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className={cx('modal-container')}>
            <div className={cx('content-container')}>
                <div className={cx('modal-content')}>
                    <div className={cx('login-container')}>
                        <div className={cx('login-wrapper')}>
                            {isHome === true && isSignInHome === false && isSignIn === false && (
                                <Home
                                    title={'Log in to TikTok'}
                                    handleClickBtn={(isHome) =>
                                        setIsHome(isHome)
                                    }
                                />
                            )}

                            {isHome === false && isSignInHome === false && (
                                <UsernameLogin
                                    handleBack={(isHome) => setIsHome(isHome)}
                                />
                            )}

                            {isSignInHome === true && isSignIn === false && (
                                <Home
                                    title={'Sign in for TikTok'}
                                    login={false}
                                    handleSignIn={(isSignInHome, isSignIn) => {
                                        setIsSignInHome(isSignInHome);
                                        setIsSignIn(isSignIn)
                                    }}
                                />
                            )}
                            {isHome === isSignInHome === false && isSignIn === true &&
                                <SignIn />
                            }
                        </div>
                    </div>
                    
                    {isSignInHome && (<div className={cx('agreement')}>
                        <p className={cx('text')}>
                            By continuing, you agree to TikTok’s{' '}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tiktok.com/legal/terms-of-service-row?lang=vi"
                                className={cx('link')}
                            >Terms of Service </a>
                            and confirm that you have read TikTok’s 
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tiktok.com/legal/privacy-policy-row?lang=vi"
                                className={cx('link')}
                            > Privacy Policy </a>
                            .
                        </p>
                    </div>)}

                    <div className={cx('modal-footer')}>
                        <div className={cx('footer-title')}>
                            Don’t have an account?
                        </div>
                        {isSignInHome === false ? (
                            <div
                                className={cx('sign-up-btn')}
                                onClick={() => setIsSignInHome(true)}
                            >
                                Sign up
                            </div>
                        ) : (
                            <div
                                className={cx('sign-up-btn')}
                                onClick={() => setIsSignInHome(false)}
                            >
                                Log in
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className={cx('close-btn-wrapper')}
                    onClick={() => props.handleClickCloseBtn(false)}
                >
                    <CloseIcon width="15px" height="15px" />
                </div>
            </div>
        </div>
    );
}

export default Auth;
