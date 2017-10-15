<template lang="html">
  <el-col :span="18" :offset="3">
  <h1>From {{moment(mappedTravel.startTime).format('HH:mm:ss DD/MM/YY')}} to {{moment(mappedTravel.endTime).format('HH:mm:ss DD/MM/YY')}} </h1>

  <el-row type="flex" class="row-bg" justify="center">
    <gmap-map
      :center="center"
      :zoom="7"
      style="width: 500px; height: 300px">
      <gmap-marker
      :key="index"
      v-for="(m, index) in mappedTravel.checkPoints"
      :position="{lat: m.latitude, lng:m.longitude}"
      :clickable="true"
      @click="center={lat: m.latitude, lng:m.longitude}"
      ></gmap-marker>
    </gmap-map>
  </el-row>
    <el-table
    :data="mappedTravel.checkPoints"
    empty-text="No data available"
    style="width: 100%">
    <el-table-column
      prop="latitude"
      align="center"
      label="Latitude">
    </el-table-column>
    <el-table-column
      prop="longitude"
      align="center"
      label="Longitude">
    </el-table-column>
    <el-table-column
      prop="speed"
      align="center"
      label="Speed (km/h)">
        <template scope="scope">
          <span>{{Math.floor((Math.random() * 4000 +  Math.random() * 2000)/100)}}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

let db = firebase.database()
export default {
  data () {
    return {
      moment: moment,
      center: {lat: 41, lng: 2.0}
    }
  },
  firebase () {
    return {
      travel: db.ref('travels/' + this.userId + '/' + this.trackId)
    }
  },
  computed: {
    trackId () {
      return this.$route.params.trackId
    },
    userId () {
      return this.$route.params.id
    },
    mappedTravel () {
      var x = {}
      for (var i in this.travel) {
        if (this.travel[i].hasOwnProperty('.key') && !this.travel[i].hasOwnProperty('.value')) {
          x[this.travel[i]['.key']] = this.travel[i]
        } else if (this.travel[i].hasOwnProperty('.value')) {
          x[this.travel[i]['.key']] = this.travel[i]['.value']
        } else {
          Object.assign(x, this.travel[i])
        }
      }
      return x
    }
  }
}
</script>

<style lang="css">
</style>
