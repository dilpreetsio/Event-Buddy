<template>
  <div class="root">
    <header-component></header-component>
    <div class="ui container">
      <div id="hackatons" class="hackathons list">
        <h2 class="ui header">
          Hackathons
        </h2>
        <item v-for='hackathon in hacks' :event="hackathon" :key="hackathon.name"></item>
        <div v-if="hacks.length == 0" class="ui text">
          <b>No hackathons? Is there something that we are missing? Please add a hackathon for this month <a href="https://github.com/geekyd/Event-Buddy">here</a></b>
        </div>
      </div>
      <div id="conferences" class="conferences list">
        <h2 class="ui header">
          Conferences
        </h2>
        <item v-for='conference in conferences' :event="conference" :key="conference.name"></item>
        <div v-if="conferences.length == 0" class="ui text">
          <b>No conferences? Is there something that we are missing? Please add a conference for this month <a href="https://github.com/geekyd/Event-Buddy">here</a></b>
        </div>
      </div>
      <div id="startups" class="startups list">
        <h2 class="ui header">
          Startup Events
        </h2>
        <item v-for='startup in startups' :event="startup" :key="startup.name"></item>
        <div v-if="startups.length == 0" class="ui text">
          <b>No start ups events? Is there something that we are missing? Please add an event for this month <a href="https://github.com/geekyd/Event-Buddy">here</a></b>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
import Item from './item.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import moment from 'moment'
import _ from 'lodash'

export default {
  Header,
  Footer,
  Item,
  name: 'root',
  data () {
    return {
      hacks: [],
      conferences: [],
      startups: []
    }
  },
  created () {
    this.$bus.$on('dateUpdate', ($event) => {
      this.updateDate($event)
    })

    // Set initially to current date
    this.updateDate(0)
  },
  methods: {
    fetchData () {
      var url = 'static/data/' + this.year + '/' + this.month + '.json'
      this.$fetch.get(url).then(response => {
        if (response.status !== 404) {
          response.json().then(data => {
            var group = _.groupBy(data, 'type')
            this.hacks = _.orderBy(group.hackathon, 'start')
            this.startups = _.orderBy(group.startup, 'start')
            this.conferences = _.orderBy(group.conference, 'start')
          })
        } else {
          this.hacks = []
          this.startups = []
          this.conferences = []
        }
      })
    },

    updateDate (monthOffset) {
      var myMoment = moment().add(monthOffset, 'months')

      this.month = myMoment.format('M')
      this.year = myMoment.format('YYYY')
      this.fetchData()
    }
  }
}
</script>
<style scoped>
.list {
  margin-top: 15px;
}
</style>
