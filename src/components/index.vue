<template>
  <div class="root">
    <header-component></header-component>
    <div class="ui container">
      <div class="hackathons list">
        <h2 class="ui header">
          Hackathons
        </h2>
        <item v-for='hackathon in hacks' :event="hackathon" :key="hackathon.name"></item>
        <div v-if="hacks.length == 0" class="ui text">
          <b>No hackathons? Is there something that we are missing? Please add a hackathon for this month <a href="https://github.com/geekyd/Event-Buddy">here</a></b>
        </div>
      </div>
      <div class="conferences list">
        <h2 class="ui header">
          Conferences
        </h2>
        <item v-for='conference in conferences' :event="conference" :key="conference.name"></item>
        <div v-if="conferences.length == 0" class="ui text">
          <b>No conferences? Is there something that we are missing? Please add a conference for this month <a href="https://github.com/geekyd/Event-Buddy">here</a></b>
        </div>
      </div>
      <div class="startups list">
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
  methods: {
    fetchData () {
      var url = 'static/data/' + this.year + '/' + this.month + '/events.json'
      this.$fetch.get(url).then(response => {
        response.json().then(data => {
          var group = this._.groupBy(data, 'type')
          this.hacks = this._.orderBy(group.hackathon, 'start')
          this.startups = this._.orderBy(group.startup, 'start')
          this.conferences = this._.orderBy(group.conferences, 'start')
        })
      })
    }
  },
  created () {
    var date = new Date()
    this.month = (date.getMonth() + 1)
    this.year = (date.getFullYear())
    this.fetchData()
  }
}
</script>
<style scoped>
.list {
  margin-top: 15px;
}
</style>
