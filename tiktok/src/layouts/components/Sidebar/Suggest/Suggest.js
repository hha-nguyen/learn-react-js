import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Suggest.module.scss';

const cx = classNames.bind(styles);

function Suggest({ children }) {
    return ( 
        <div className={cx('wrapper')}>{ children }</div>
    );
}

export default Suggest;

Suggest.propTypes = {
    children: PropTypes.node.isRequired
}