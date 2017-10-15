<template lang="html">
  <el-col :span="16">
  <div class="">
    <h1>Travels for {{mappedUser.fName + ' ' + mappedUser.sName}}</h1>
      <el-table
      :data="mappedTravels"
      empty-text="No data available"
      style="width: 100%">
      <el-table-column
        prop="id"
        align="center"
        label="id">
      </el-table-column>
      <el-table-column
        prop="startDate"
        align="center"
        label="Begin">
      </el-table-column>
      <el-table-column
        prop="endDate"
        align="center"
        label="End">
      </el-table-column>
      <el-table-column
        prop="duration"
        align="center"
        label="Duration">
      </el-table-column>
      <el-table-column
        prop="numberOfCheckpoints"
        align="center"
        label="Checkpoints">
      </el-table-column>
      <el-table-column
        prop="checkmap"
        align="center"
        label="Checkpoints">
      </el-table-column>
    </el-table>
  </div>
  </el-col>
</template>

<script>
import moment from 'moment'
import firebase from 'firebase'
import users from '@/mixins/users.js'
import axios from 'axios'

let db = firebase.database()
export default {
  mixins: [users],
  name: 'travels',
  firebase () {
    return {
      travels: db.ref('travels/' + this.userId),
      user: db.ref('users/' + this.userId)
    }
  },
  methods: {
    buildURL (checkmap) {
      var apikey = 'IzaSyBReCymPX_XOfraeYKpls-PnI6B8kcfV6o'
      var url = `https://roads.googleapis.com/v1/snapToRoads?interpolate=true&key=${apikey}&path=${checkmap}`
      console.log('url ', url)
      return url
    }
  },
  computed: {
    userId () {
      return this.$route.params.idf
    },
    mappedTravels () {
      return this.travels.map(it => {
        it.id = it['.key']
        console.log('time : ', it.startTime.time, ' and ', new Date(it.startTime.time))
        it.startDate = moment(it.startTime.time).format('HH:mm:ss DD-MM-YYYY')
        it.endDate = moment(it.endTime.time).format('HH:mm:ss DD-MM-YYYY')
        it.duration = moment.utc(moment(it.endTime.time).diff(moment(it.startTime.time))).format('HH:mm:ss')
        it.numberOfCheckpoints = it.checkPoints.length
        it.checkmap = it.checkPoints.map(it => {
          return it.latitude + ',' + it.longitude
        }).join('|')
        axios.get(this.buildURL(it.checkmap)).then(data => console.log('data ', data)).catch(err => console.log('err ', err))
        return it
      })
    }
  }
}
</script>

<style lang="css">
</style>
