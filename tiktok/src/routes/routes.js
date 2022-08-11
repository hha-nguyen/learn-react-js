import config from '~/config'; 

// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/layouts/components/Search/Search';
import Live from '~/pages/Live';
import Discover from '~/layouts/components/Sidebar/Discover';
import DefaultLayout from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.live, component: Live },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: null},
    { path: config.routes.search, component: Search, layout: null},
    { path: config.routes.tag, component: Discover, layout: DefaultLayout},
];

const privateRoutes = [

]

export { publicRoutes, privateRoutes }