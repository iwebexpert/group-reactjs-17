import {Home} from 'pages/Home';
import {About} from 'pages/About';
import {Error} from 'pages/Error';
import {Profile} from 'pages/Profile';
import {Messenger} from 'components/Messenger';
import {MessengerContainer} from 'containers/MessengerContainer';
import {ProfileContainer} from 'containers/ProfileContainer.jsx';

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerContainer,
    },
    {
        path: '/about',
        exact: true,
        component: About,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: MessengerContainer,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfileContainer,
    },
    {
        path: '*',
        exact: false,
        component: Error
    },
];