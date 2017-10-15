<template>
  <div id="app">
    <el-row class="tac">
    <el-col :span="4">
      <el-menu default-active="1" class="el-menu-vertical-demo" >
      <!-- <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"> -->
        <el-menu-item index="1">
          <router-link tag="i" class="el-icon-menu" :to="{ name: 'hello', params: {} }"></router-link>Hello
        </el-menu-item>
        <el-menu-item index="2">
          <router-link tag="i" class="el-icon-menu" :to="{ name: 'dashboard', params: {} }"></router-link>Home
        </el-menu-item>
        <el-menu-item index="3">
          <router-link tag="i" class="el-icon-menu" :to="{ name: 'users', params: {} }"></router-link> Users
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view :span="20"> </router-view>
  </el-row>
  </div>
</template>

<script>
import Firebase from 'firebase'
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
  name: 'app'
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
