import {About} from 'pages/About';
import {Error} from 'pages/Error';
import {Layout} from 'components/Layout';
import {Profile} from "components/Profile";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: Layout
    },
    {
        path: '*',
        exact: false,
        component: Error
    },
];