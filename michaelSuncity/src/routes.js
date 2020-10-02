import {Home} from 'pages/Home';
import {About} from 'pages/About';
import {Error} from 'pages/Error';
import {Profile} from 'components/Profile';
import {Messenger} from 'components/Messenger';
import {AddChat} from 'components/AddChat';



export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/about',
        exact: true,
        component: About,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: Messenger,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
    },
    {
        path: '/addchat',
        exact: true,
        component: AddChat,
    },
    {
        path: '*',
        exact: false,
        component: Error,
    },
];