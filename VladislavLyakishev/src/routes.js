import {About} from './pages/About';
import {Error} from './pages/Error';
import {ProfileContainer} from './containers/ProfileContainer';
import {MessengerContainer} from './containers/MessengerContainer'

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/profile',
        exact: true,
        component: ProfileContainer
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '*',
        exact: false,
        component: Error
    }
];
