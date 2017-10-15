<template lang="html">
  <el-col :span="18" :offset="3">
  <div class="">
    <h1>User List</h1>
      <el-table
      :span="5"
      :data="users"
      empty-text="No data available"
      style="width: 100%">
      <el-table-column
      align="center"
        prop="fName"
        label="Name"
        width="">
      </el-table-column>
      <el-table-column
      align="center"
        label="Email"
        prop="email"
        width="">
      </el-table-column>
      <el-table-column
        prop="phone"
        align="center"
        label="Phone">
      </el-table-column>
      <el-table-column
      align="center"
      fixed="right"
        label="Actions">
        <template scope="scope">
          <el-button @click="goTravel(scope)" type="text" size="small">Travels</el-button>
          <el-button @click="goProfile(scope)"type="text" size="small">Profile</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </el-col>
</template>
<script>
import firebase from 'firebase'

let db = firebase.database()
export default {
  firebase: {
    users: db.ref('users')
  },
  methods: {
    goTravel (scope) {
      this.$router.push({name: 'userTracks', params: {id: scope.row['.key']}})
    },
    goProfile (scope) {
      this.$router.push({name: 'userProfile', params: {id: scope.row['.key']}})
    }
  }
}
</script>

<style lang="css">
</style>
