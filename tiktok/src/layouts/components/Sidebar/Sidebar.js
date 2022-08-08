import classNames from 'classnames/bind';
import config from '~/config';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Suggest from './Suggest';
import Button from '~/components/Button';

import { GROUP_OF_USER_DATA } from './Suggest';
import AccountItems from '~/components/AccountItems';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>

            <Suggest>
                <p className={cx('suggest-title')}>Suggested accounts</p>
                {GROUP_OF_USER_DATA.map((USER_DATA, id) => {
                    return (
                        <AccountItems
                            data={USER_DATA}
                            key={id}
                        ></AccountItems>
                    );
                })}
                <button className={cx('suggest-more-btn')}>See all</button>
            </Suggest>
        </aside>
    );
}

export default Sidebar;
