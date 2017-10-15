<template>
  <div id="app">
    <el-row class="tac">
      <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <router-link :index="1" tag="el-menu-item" class="active" :to="{ name: 'dashboard', params: {} }">
          <img :src="bg" width="48px">
        </router-link>

        <router-link :index="1" tag="el-menu-item" class="active" :to="{ name: 'dashboard', params: {} }"><i class="el-icon-menu"></i>Home</router-link>
        <router-link :index="2" tag="el-menu-item" class="active"  :to="{ name: 'users', params: {} }"><i  class="el-icon-menu"></i>Users</router-link>
        <!-- <el-menu-item index="1">Processing Center</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item> -->
      </el-menu>

    <!-- <el-col :span="4">
      <el-menu  class="el-menu-vertical-demo" >

      </el-menu>
    </el-col> -->
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
