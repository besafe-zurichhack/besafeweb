<template lang="html">
  <el-col :span="18" :offset="3">
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
        align="center"
        label="Actions">
        <template scope="scope">
          <el-button @click="seeTravel(scope)" type="text" size="small">More</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </el-col>
</template>

<script>
/* eslint-disable */
import moment from 'moment'
import firebase from 'firebase'
import users from '@/mixins/users.js'
import axios from 'axios'

// const google = window.google
var drawingManager
var placeIdArray = []
var polylines = []
var snappedCoordinates = []
var map
var apikey = 'AIzaSyBReCymPX_XOfraeYKpls-PnI6B8kcfV6o'

drawingManager = new google.maps.drawing.DrawingManager({
  drawingMode: google.maps.drawing.OverlayType.POLYLINE,
  drawingControl: true,
  drawingControlOptions: {
    position: google.maps.ControlPosition.TOP_CENTER,
    drawingModes: [
      google.maps.drawing.OverlayType.POLYLINE
    ]
  },
  polylineOptions: {
    strokeColor: '#696969',
    strokeWeight: 2
  }
})
drawingManager.setMap(map)

// Snap-to-road when the polyline is completed.
drawingManager.addListener('polylinecomplete', function (poly) {
  var path = poly.getPath()
  polylines.push(poly)
  placeIdArray = []
  runSnapToRoad(path)
})

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
    seeTravel (scope) {
      console.log('scope to see ', scope);
      this.$router.push({name: 'singleTrack', params: {user: this.$route.params.id, trackId: scope.row['.key']}})
    },
    buildURL (checkmap, scope) {
      console.log('Scope ', scope)
      // var apikey = 'AIzaSyBReCymPX_XOfraeYKpls-PnI6B8kcfV6o'
      var url = `https://roads.googleapis.com/v1/snapToRoads?interpolate=true&key=${apikey}&path=${checkmap}`
      console.log('url ', url)
      return url
    },
    drawMap (scope) {
      console.log('SCOPE IS ', scope);
      setTimeout(() => {
      console.log('SCOPE IS key ', scope.row['.key']);
      this.$nextTick(() => {
      this.$nextTick(() => {
        var map = new google.maps.Map(document.getElementById(scope.row['.key']), {})
        var url = this.buildURL(scope.row.checkmap)
        console.log('url ', url);
        axios.get(url)
          .then(response => {
            console.log('Response: ', response.data);
            this.processSnapToRoadResponse(response.data)
            this.drawSnappedPolyline()
            // this.getAndDrawSpeedLimits()
          })
          .catch(err => console.log('err ', err))
      })
      })
    })

    },
    processSnapToRoadResponse (data) {
      snappedCoordinates = []
      placeIdArray = []
      for (var i = 0; i < data.snappedPoints.length; i++) {
        console.log('location.latitude: ', data.snappedPoints[i].location.latitude)
        console.log('location.longitude: ', data.snappedPoints[i].location.longitude)
        var latlng = new google.maps.LatLng(
            data.snappedPoints[i].location.latitude,
            data.snappedPoints[i].location.longitude)
        snappedCoordinates.push(latlng)
        placeIdArray.push(data.snappedPoints[i].placeId)
      }
    },
    drawSnappedPolyline () {
      var snappedPolyline = new google.maps.Polyline({
        path: snappedCoordinates,
        strokeColor: 'black',
        strokeWeight: 3
      })

      snappedPolyline.setMap(map)
      polylines.push(snappedPolyline)
    },
    // getAndDrawSpeedLimits () {
    //   for (var i = 0; i <= placeIdArray.length / 100 ; i++) {
    //     // Ensure that no query exceeds the max 100 placeID limit.
    //     var start = i * 100
    //     var end = Math.min((i + 1) * 100 - 1, placeIdArray.length)
    //
    //     this.drawSpeedLimits(start, end)
    //   }
    // },
    // drawSpeedLimits (start, end) {
    //   var placeIdQuery = ''
    //   for (var i = start; i < end; i++) {
    //     placeIdQuery += '&placeId=' + placeIdArray[i]
    //   }
    //
    //   var apiKey = 'AIzaSyBReCymPX_XOfraeYKpls-PnI6B8kcfV6o'
    //   $.get('https://roads.googleapis.com/v1/speedLimits',
    //       'key=' + apiKey + placeIdQuery,
    //       function(speedData) {
    //         this.processSpeedLimitResponse(speedData, start)
    //       }
    //   )
    // },
    // processSpeedLimitResponse (speedData, start) {
    //   var end = start + speedData.speedLimits.length
    //   for (var i = 0; i < speedData.speedLimits.length - 1; i++) {
    //     var speedLimit = speedData.speedLimits[i].speedLimit
    //     var color = this.getColorForSpeed(speedLimit)
    //
    //     // Take two points for a single-segment polyline.
    //     var coords = snappedCoordinates.slice(start + i, start + i + 2)
    //
    //     var snappedPolyline = new google.maps.Polyline({
    //       path: coords,
    //       strokeColor: color,
    //       strokeWeight: 6
    //     })
    //     snappedPolyline.setMap(map)
    //     polylines.push(snappedPolyline)
    //   }
    // },
    // getColorForSpeed (speed_kph) {
    //   if (speed_kph <= 40) {
    //     return 'purple'
    //   }
    //   if (speed_kph <= 50) {
    //     return 'blue'
    //   }
    //   if (speed_kph <= 60) {
    //     return 'green'
    //   }
    //   if (speed_kph <= 80) {
    //     return 'yellow'
    //   }
    //   if (speed_kph <= 100) {
    //     return 'orange'
    //   }
    //   return 'red'
    // }
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
        // axios.get(this.buildURL(it.checkmap)).then(data => console.log('data ', data)).catch(err => console.log('err ', err))
        return it
      })
    }
  }
}
</script>

<style lang="css">
</style>
