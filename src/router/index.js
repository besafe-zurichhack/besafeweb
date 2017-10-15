import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserProfile from '@/components/UserProfile'
import UserList from '@/components/UsersList'
import UserTracks from '@/components/UserTracks'
import SingleTrack from '@/components/SingleTrack'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dash',
      name: 'dashboard',
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
    },
    {
      path: '/users/:id/tracks/:trackId',
      name: 'singleTrack',
      component: SingleTrack
    }
  ]
})
