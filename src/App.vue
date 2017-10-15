<template>
  <div id="app">
    <el-row class="tac">
      <el-menu theme="light" router="true" class="el-menu-demo" mode="horizontal">
        <router-link :index="1" tag="el-menu-item" class="active" :to="{ name: 'dashboard', params: {} }">
          <img :src="bg" width="48px">
        </router-link>

        <router-link index="/dash" tag="el-menu-item" class="active" :to="{ name: 'dashboard', params: {} }"><i class="el-icon-menu"></i>Dashboard</router-link>
        <router-link index="/users" tag="el-menu-item" class="active"  :to="{ name: 'users', params: {} }"><i  class="el-icon-menu"></i>Users</router-link>
      </el-menu>
    <router-view :span="24"> </router-view>
  </el-row>
  </div>
</template>

<script>
import Firebase from 'firebase'
const img = require('@/assets/zurich.png')

let config = {
  apiKey: 'AIzaSyAb4UU0QiTKOyIonjQpM7O87cexpcKprjA',
  authDomain: 'zurich-707e5.firebaseapp.com',
  databaseURL: 'https://zurich-707e5.firebaseio.com',
  projectId: 'zurich-707e5',
  storageBucket: 'zurich-707e5.appspot.com',
  messagingSenderId: '604954716786'
}

Firebase.initializeApp(config)

export default {
  name: 'app',
  data () {
    return {
      bg: img
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  /*margin-top: 60px;*/
}

body {
  margin: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 1000px;
}
</style>
