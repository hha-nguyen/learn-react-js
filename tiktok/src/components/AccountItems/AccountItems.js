import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { debounce } from 'lodash';

import styles from './AccountItems.module.scss';
import Image from '~/components/Image';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountItems({ userData, isSuggestItem = false }) {
    const [isHover, setIsHover] = useState(false);
    const [countFollower, setCountFollower] = useState(userData.follower);
    // const [countLike, setCountLike] =useState(userData.like);

    const increaseFollower = () => {
        setCountFollower((prev) => Math.floor((prev / Math.pow(10, 6) + 1)));
    };
    
    const addToFollowedAccount = (userData) => {
        userData.isFollowing = true;
    }

    const handleButtonOnClick = () => {
        addToFollowedAccount(userData);
        increaseFollower();
    }
    const debounceHandleMouseEnter = debounce(() => setIsHover(true), 1000);
    
    const handleOnMouseLeave = () => {
        setIsHover(false);
        debounceHandleMouseEnter.cancel();
    }

    // const increaseLike = () => {
    //     setCountLike(prev => prev + 1);
    // }

    return (
        <>
            <Link
                to={`/@${userData.nickname}`}
                className={cx('wrapper')}
                onMouseEnter={debounceHandleMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <Image
                    className={cx('avatar')}
                    src={userData.avatar}
                    alt={userData.full_name}
                    isStreaming={userData.isStreaming}
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{userData.nickname}</span>
                        {userData.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            ></FontAwesomeIcon>
                        )}
                    </h4>
                    <span className={cx('username')}>{userData.full_name}</span>
                </div>
            </Link>


            {/* Set up suggest description for suggest account */}
            {isHover && isSuggestItem && (
                <div
                    className={cx('desc')}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={handleOnMouseLeave}
                >
                    <div className={cx('desc-header')}>
                        <Image
                            className={cx('avatar')}
                            src={userData.avatar}
                            alt={userData.full_name}
                        />
                        <Button
                            primary
                            className={cx('follow-btn')}
                            onClick={handleButtonOnClick}
                        >
                            Follow
                        </Button>
                    </div>
                    <div className={cx('info')}>
                        <Link to={`/@${userData.nickname}`} className={cx('name')}>
                            <span>{userData.nickname}</span>
                            {userData.tick && (
                                <FontAwesomeIcon
                                    className={cx('check')}
                                    icon={faCheckCircle}
                                ></FontAwesomeIcon>
                            )}
                        </Link>
                        <br />
                        <Link
                            to={`/@${userData.nickname}`}
                            className={cx('username')}
                        >
                            {userData.full_name}
                        </Link>
                    </div>
                    <div>
                        <span className={cx('followers-count')}>
                            {countFollower}M
                        </span>
                        <span className={cx('followers')}>Followers</span>
                        <span className={cx('likes-count')}>{userData.like}M</span>
                        <span className={cx('likes')}>Likes</span>
                    </div>
                </div>
            )}
        </>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object,
};

export default AccountItems;
