<template lang="html">
  <div class="card">
    Hello, {{user}} {{userId}}
  </div>
</template>

<script>
import firebase from 'firebase'

let db = firebase.database()

export default {
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
