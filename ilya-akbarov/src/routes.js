import Home from '@/pages/Home'
import About from '@/pages/About'
import Chats from '@containers/MessengerContainer'
import Profile from '@containers/ProfileContainer'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/chats/:id?',
    exact: true,
    component: Chats
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  }
]
