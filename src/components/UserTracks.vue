<template lang="html">
  <div class="contaner">
    <h1>Tracks</h1>
    <table>
      <thead>
        <tr>
          <th>
            Distance
          </th>
          <th>
            Start time
          </th>
          <th>
            End Time
          </th>
          <th>
            Points
          </th>
          <th>
            Checkpoints
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="travel in travels">
          <td>
            {{travel.distance}}
          </td>
          <td>
            {{travel.startTime}}
          </td>
          <td>
            {{travel.endtime}}
          </td>
          <td>
            {{travel.points}}
          </td>
          <td>
            {{travel.checkPoins}}
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
  name: 'travels',
  firebase () {
    return {
      travels: db.ref('travels/' + this.userId)
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
