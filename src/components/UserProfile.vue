<template lang="html">
  <div class="card">
    Hello, {{mappedUser}}
  </div>
</template>

<script>
import firebase from 'firebase'
import users from '@/mixins/users.js'
let db = firebase.database()

export default {
  mixins: [users],
  name: 'users',
  firebase () {
    return {
      user: db.ref('users/' + this.userId)
    }
  },
  computed: {
    userId () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
