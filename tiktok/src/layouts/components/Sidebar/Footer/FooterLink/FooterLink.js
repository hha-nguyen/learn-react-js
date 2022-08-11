import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./FooterLink.module.scss";

const cx = classNames.bind(styles);

function FooterLink({ title }) {

    return (
        <Link 
            className={cx('Link')}
            to={`/${title}?lang=en`}
        >
            {title}
        </Link>
    );
}

export default FooterLink;