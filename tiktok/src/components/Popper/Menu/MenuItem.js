import Button from "~/components/Button"
import styles from './Menu.module.scss'
import classNames from "classnames/bind"

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    const classes = cx('menu-item');

    return ( 
        <Button className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;