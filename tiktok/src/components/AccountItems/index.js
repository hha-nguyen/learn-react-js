import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e3b8b63dc45cd188f9658af3ea5273e7~c5_300x300.webp?x-expires=1656856800&x-signature=RNQDXgCOq0UEWybvyu4Op24D1R0%3D" 
                alt="" 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvanA247</span>
            </div>
        </div>
    );
}

export default AccountItems;