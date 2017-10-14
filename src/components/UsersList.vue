<template lang="html">
  <div class="container">
    <h1>User List</h1>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            Phone
          </th>
          <th>
            Travels
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>
            {{user.fName}}  {{user.sName}}
          </td>
          <td>
            {{user.email}}
          </td>
          <td>
            {{user.phone}}
          </td>
          <td>
            <button>See travels</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'

let db = firebase.database()
export default {
  name: 'app',
  firebase: {
    users: db.ref('users')
  }
}
</script>

<style lang="css">
</style>
