<template lang="html">
  <div class="">
    Dashboard
  </div>
</template>

<script>
import firebase from 'firebase'
// import moment from 'moment'
let db = firebase.database()

export default {
  firebase: {
    users: db.ref('users'),
    travels: db.ref('travels')
  }
}
</script>

<style lang="css">
</style>
