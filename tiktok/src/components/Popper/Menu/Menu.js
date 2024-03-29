import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) =>
            prev.slice(0, prev.length - 1),
        );
    }

    const renderReusult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-propper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={handleBack}
                    ></Header>
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    }

    return (
        <Tippy
            interactive
            hideOnClick={false}
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            render={renderReusult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
