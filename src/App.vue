<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// Create a global event bus to emit/listen to events across all vues
import Vue from 'vue'

export default {
  name: 'app'
}
const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>