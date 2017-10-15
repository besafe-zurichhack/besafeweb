<template lang="html">
  <div class="">
    <h1>Dashboard</h1>
    <div id="firstChart" width="200px" height="200px"></div>
    <h1>{{numberOfTravels}} trips in this period for a total of {{numberOfUsers}} users!</h1>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
import Highcharts from 'Highcharts'
// import moment from 'moment'
let db = firebase.database()
export default {
  firebase: {
    users: db.ref('users'),
    travels: db.ref('travels')
  },
  created () {
    // this.drawCharts();
  },
  watch: {
    'cachedUsers' () {
      console.log('Data changed');
      this.drawCharts();
    }
  },
  computed: {
    cachedUsers() {
      return this.users
    },
    numberOfTravels() {
      var sum = 0
      this.travels.map(user => sum += Object.keys(user).length -1)
      return sum
    },
    numberOfUsers() {
      return this.users.length
    }
  },
  created () {
    setTimeout(() => {
      this.drawCharts()
    }, 1000)
  },
  methods: {
    drawCharts () {
      const data = this.users.map(it => {
        return {
          data: [it.score],
          name: it.fName
        }
      }).slice(0)
      Highcharts.chart('firstChart', {
        chart: {
                type: 'bar'
          },
          title: {
            text: 'Points per user'
          },
          xAxis: {
            categories: ['Points'],
            title: {
              text: null
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: '',
              align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
          },
          plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
          },
          series: data
        })
    }
  }
}
</script>

<style lang="css">
</style>
