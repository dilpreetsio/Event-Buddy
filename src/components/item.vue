<template>
  <div class="ui segment">
    <a :href=event.website>
      <div class="ui grid">
        <div class="ui row">
          <div class="ui column four wide">
            <img v-if="event.logo" class="ui tiny circular image fluid" v-bind:src="event.logo" v-bind:alt="event.name">
            <img v-else class="ui tiny circular image fluid" src="../assets/icon.png">
          </div>
          <div class="ui column twelve wide data">
            <h3 class="ui header">
              {{event.name}}
            </h3>
            <div class="time">
              {{event.start}} - {{event.end}}
            </div>
            <div class="location">
              <h5 class="ui header">
                {{event.location}}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  props: ['event']
}
</script>

<style scoped>
  .location {
    padding: 5px
  }
  .data {
    text-align: right;
    color: #000000;
  }
</style>
