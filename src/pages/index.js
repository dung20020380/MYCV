import AboutMe from './AboutMe';
import Activities from './Activities';

const publicRoutes = [
    {
        name: 'AboutMe',
        path: '/',
        component: <AboutMe />,
    },
    {
        name: 'Activities',
        path: '/active',
        component: <Activities />,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
