import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountItems({ data, isSuggestItem = false }) {
    const [showSidebarItem, setShowSidebarItem] = useState(false);
    const [countFollower, setCountFollower] = useState(data.follower);
    // const [countLike, setCountLike] =useState(data.like);

    const increaseFollower = () => {
        setCountFollower((prev) => prev + 1);
    };

    // const increaseLike = () => {
    //     setCountLike(prev => prev + 1);
    // }

    return (
        <>
            <Link
                to={`/@${data.nickname}`}
                className={cx('wrapper')}
                onMouseOver={() => setShowSidebarItem(true)}
                onMouseLeave={() => setShowSidebarItem(false)}
            >
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.full_name}
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.nickname}</span>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            ></FontAwesomeIcon>
                        )}
                    </h4>
                    <span className={cx('username')}>{data.full_name}</span>
                </div>
            </Link>

            {/* Set up suggest description for suggest account */}
            {showSidebarItem && isSuggestItem && (
                <div
                    className={cx('desc')}
                    onMouseOver={() => setShowSidebarItem(true)}
                    onMouseLeave={() => setShowSidebarItem(false)}
                >
                    <div className={cx('desc-header')}>
                        <Image
                            className={cx('avatar')}
                            src={data.avatar}
                            alt={data.full_name}
                        />
                        <Button
                            primary
                            className={cx('follow-btn')}
                            onClick={increaseFollower}
                        >
                            Follow
                        </Button>
                    </div>
                    <div className={cx('info')}>
                        <Link to={`/@${data.nickname}`} className={cx('name')}>
                            <span>{data.nickname}</span>
                            {data.tick && (
                                <FontAwesomeIcon
                                    className={cx('check')}
                                    icon={faCheckCircle}
                                ></FontAwesomeIcon>
                            )}
                        </Link>
                        <br />
                        <Link
                            to={`/@${data.nickname}`}
                            className={cx('username')}
                        >
                            {data.full_name}
                        </Link>
                    </div>
                    <div>
                        <span className={cx('followers-count')}>
                            {countFollower}M
                        </span>
                        <span className={cx('followers')}>Followers</span>
                        <span className={cx('likes-count')}>{data.like}M</span>
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
