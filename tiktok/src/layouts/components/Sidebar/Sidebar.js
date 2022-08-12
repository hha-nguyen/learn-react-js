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
import { GROUP_OF_USER_DATA } from './Suggest';
import Discover from './Discover/Discover';
import Footer from './Footer/Footer';
import Scrollbar from './Scrollbar';

const cx = classNames.bind(styles);

const getFollowedUsers = (data) => {
    let followedUsers = [];
    data.forEach(userData => {
        if (userData.isFollowing === true) {
            followedUsers.push(userData);
        }
    });
    
    return followedUsers;
}

const getSuggestUsers = (data) => {
    let suggestUsers = [];
    data.forEach(userData => {
        if (userData.isFollowing === false) {
            suggestUsers.push(userData);
        }
    });

    return suggestUsers;
}

function Sidebar() {
    return (
        <aside className={cx('containter')}>
            <div className={cx('wrapper')}>
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

                <Suggest title={"Suggested accounts"} data={getSuggestUsers(GROUP_OF_USER_DATA)}/> 

                <Suggest title={"Following accounts"} data={getFollowedUsers(GROUP_OF_USER_DATA)}/>
                
                <Discover/> 

                <Footer />
            </div>
        
            <Scrollbar />
        </aside>
    );
}

export default Sidebar;
