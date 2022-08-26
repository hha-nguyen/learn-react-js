import React from 'react';
import classNames from 'classnames/bind';
import { EyesCloseIcon, EyesOpenIcon } from '~/components/Icons';
import styles from './UsernameLogin.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);

export default function UsernameLogin() {
    const [isOpened, setIsOpened] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    const handleClickIcon = () => {
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
                    <i className={cx('password-icon')} onClick={() => handleClickIcon()}>
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

