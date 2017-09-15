<template>
  <div class="hello ui container">
    <div class="ui segment" v-for='hack in hacks'>
      {{hack.name}}
    </div>
  </div>
</template>

<script>
import hacks from '../../data/hacks.json'

export default {
  name: 'hello',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
