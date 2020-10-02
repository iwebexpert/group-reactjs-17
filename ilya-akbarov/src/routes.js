import Home from '@/pages/Home'
import About from '@/pages/About'
import Chats from '@/pages/Chats'
import Profile from '@/pages/Profile'

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
