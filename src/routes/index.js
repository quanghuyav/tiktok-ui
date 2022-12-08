import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

//Public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload },
];

export const privateRoutes = [];
