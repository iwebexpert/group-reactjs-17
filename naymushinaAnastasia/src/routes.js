
import Messenger from './components/Messenger';

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
    }
];
