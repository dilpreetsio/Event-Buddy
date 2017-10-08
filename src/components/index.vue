<template>
  <div class="root">
    <header-component></header-component>
    <div class="ui container">
      <div class="hackathons list">
        <h2 class="ui header">
          Hackathons
        </h2>
        <item v-for='hackathon in hacks' :event="hackathon" :key="hackathon.name"></item>
      </div>
      <div class="conferences list">
        <h2 class="ui header">
          Conferences
        </h2>
        <item v-for='conference in conferences' :event="conference" :key="conference.name"></item>
      </div>
      <div class="startups list">
        <h2 class="ui header">
          Startup Events
        </h2>
        <item v-for='startup in startups' :event="startup" :key="startup.name"></item>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
import hacks from '../../data/hacks.json'
import conferences from '../../data/conferences.json'
import startups from '../../data/start-up.json'
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
      hacks: this._.orderBy(hacks, 'start', 'desc'),
      conferences: this._.orderBy(conferences, 'start', 'desc'),
      startups: this._.orderBy(startups, 'start', 'desc')
    }
  }
}
</script>
<style scoped>
.list {
  margin-top: 15px;
}
</style>
