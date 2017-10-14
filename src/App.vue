<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
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
  margin-top: 60px;
}
</style>
