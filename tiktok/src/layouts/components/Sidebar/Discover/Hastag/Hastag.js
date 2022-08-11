import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Hastag.module.scss";

const cx = classNames.bind(styles);

function Hastag({ icon, title }) {
    return ( 
        <Link 
            className={cx('wrapper')} 
            to={`/tag/${title}`}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}

export default Hastag;