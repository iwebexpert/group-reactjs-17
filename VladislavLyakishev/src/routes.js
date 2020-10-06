import {About} from './pages/About';
import {Error} from './pages/Error';
import {Profile} from './pages/Profile';
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
        component: Profile
    },
    {
        path: '/chats/:id',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '*',
        exact: false,
        component: Error
    }
];
