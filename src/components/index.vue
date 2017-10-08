<template>
  <div class="root">
    <div class="header ui row" style="background-color:#113d6b; color:white">
      <h1>HackathonList</h1>
    </div>
    <div class="ui container">
      <h2 class="ui header">
        Hackathons
      </h2>
      <hack v-for='hackathon in hacks' :hack="hackathon" :key="hackathon.name"></hack>
    </div>
  </div>
</template>

<script>
import hacks from '../../data/hacks.json'
import Hack from './hack.vue'

export default {
  Hack,
  name: 'root',
  data () {
    return {
      hacks: hacks
    }
  },
  created: function () {
    fetch('/a.json')
      .then(r => r.json())
      .then(json => {
        this.json = json
      })
  }
}
</script>
<style scoped>
  .header.ui.row {
    text-align: center;
  }
</style>
