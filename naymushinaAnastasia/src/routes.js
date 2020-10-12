
import Messenger from './components/Messenger';
import Profile from "./components/Profile";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Messenger
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: Messenger
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    }
];
