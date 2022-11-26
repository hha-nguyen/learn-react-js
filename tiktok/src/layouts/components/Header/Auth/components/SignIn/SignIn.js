import React from 'react';
import classNames from 'classnames/bind';
import { BackIcon, EyesCloseIcon, EyesOpenIcon } from '~/components/Icons';
import styles from './SignIn.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);

function SignIn(props) {
    const [isOpened, setIsOpened] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    const handleClickEyesIcon = () => {
        if(isOpened) {
            setIsOpened(false);
        } else {
            setIsOpened(true);
        }
    }

    const handleChangeUsername = (e) => {
        if (e.target.value) {
            setIsChanged(true)
        } else {
            setIsChanged(false)
        }
    }

    const handleChangePassword = (e) => {
        if (e.target.value) {
            setIsChanged(true)
        } else {
            setIsChanged(false)
        }
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('back-icon')} onClick={() => props.handleBack(true)}>
                <BackIcon />
            </div>
            <div className={cx('title')}>Log in</div>
            <div className={cx('description')}>Email or username</div>
            <form>
                <div className={cx('input-container')}>
                    <input
                        type="text"
                        placeholder="Email or username"
                        name="username"
                        className={cx('account-input')}
                    />
                </div>
                <div className={cx('input-container')}>
                    {isOpened 
                    ? (<input
                        type="text"
                        placeholder={cx('Password')}
                        autoComplete="new-password"
                        spellCheck="none"
                        onChange={handleChangeUsername}
                        className={cx('password-input')}
                    />)
                    : (<input
                        type="password"
                        placeholder={cx('Password')}
                        autoComplete="new-password"
                        spellCheck="none"
                        onChange={handleChangePassword}
                        className={cx('password-input')}
                    />)}
                    <i className={cx('password-icon')} onClick={() => handleClickEyesIcon()}>
                        {isOpened
                        ? (<EyesOpenIcon />)
                        : (<EyesCloseIcon />)}
                    </i>
                </div>
                {isChanged 
                ? (<button type='submit' className={cx('submit-btn')}>Log in</button>)
                : (<button type='submit' disabled className={cx('disable-btn')}>Log in</button>)}
            </form>
        </div>    
    );
}

export default SignIn;