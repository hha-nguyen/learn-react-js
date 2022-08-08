import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src={data.avatar} 
                alt={data.full_name} 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && (<FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>)}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>

            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object,
}

export default AccountItems;