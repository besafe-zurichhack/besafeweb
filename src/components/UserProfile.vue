<template lang="html">
  <el-row>
    <el-col :span="6" :offset="9" style="margin-top: 40px">
      <el-card :body-style="{ padding: '50px' }"  :span="2">
        <img  :src="mappedUser.porfilePic" align="center" height="200" class="image img-circle">
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <h1>{{mappedUser.fName}} {{mappedUser.sName}}</h1>
            <p>{{mappedUser.email}}</p>
            <p>{{mappedUser.phone}}</p>
            <span style="margin: 5px" v-for="t in tags">
              <el-tag :type="t.type">
                {{t.text}}
              </el-tag>
            </span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import firebase from 'firebase'
import users from '@/mixins/users.js'
let db = firebase.database()

export default {
  mixins: [users],
  name: 'travels',
  firebase () {
    return {
      user: db.ref('users/' + this.userId),
      travels: db.ref('travels/' + this.userId)
    }
  },
  data () {
    return {
      tags: [
        {
          type: 'success',
          text: 'calm'
        },
        {
          type: 'warning',
          text: 'undecided'
        },
        {
          type: 'info',
          text: 'occasional driver'
        }
      ]
    }
  },
  computed: {
    userId () {
      return this.$route.params.id
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
.img-circle {
    border-radius: 50%;
}
</style>
