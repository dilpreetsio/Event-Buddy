<template>
  <div class="root">
    <div class="header ui row" style="background-color:#113d6b; color:white">
      <h1>HackathonList</h1>
    </div>
    <div class="ui container">
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
