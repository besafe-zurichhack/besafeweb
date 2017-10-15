<template lang="html">
  <el-col :span="20">
    <el-col :span="6" :offset="9">
      <el-form ref="form">
      <el-form-item >
        <el-input placeholder="Email" v-model="email"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input type="password" placeholder="Password" v-model="password"></el-input>
      </el-form-item>
      <el-button type="primary" size="large" @click="doLogin()">Login</el-button>
    </el-form>
  </el-col>
</el-col>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    doLogin () {
      if (this.email === 'admin@admin.com' && this.password === 'adminadmin') {
        this.$router.push({name: 'dashboard'})
      } else {
        alert('Incorrect username or password!')
      }
    }
  }
}
</script>

<style lang="css">
</style>
