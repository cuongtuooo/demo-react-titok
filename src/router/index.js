import { HeaderOnly } from '../Component/Layout';

import Home from '../Component/Pages/Home';
import Following from '../Component/Pages/Following';
import Profile from '../Component/Pages/Profile';
import upload from '../Component/Pages/upload';
import Search from '../Component/Pages/Search';

const publicRouter = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/upload', component: upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
