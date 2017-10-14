import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import UserProfile from '@/components/UserProfile'
import UserList from '@/components/UsersList'
import UserTracks from '@/components/UserTracks'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dash',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: UserList
    },
    {
      path: '/users/:id',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/users/:id/tracks',
      name: 'userTracks',
      component: UserTracks
    }
  ]
})
