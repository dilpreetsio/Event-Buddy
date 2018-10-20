<template>
  <div class="header ui row">
    <img class="logo" src="../assets/logo.png">
    <github-buttons-component></github-buttons-component>
    <div class="month column sixteen wide ui row">
      <button class="circular ui icon button" v-on:click="decrementMonth()">
        <i class="angle left icon"></i>
      </button>
      {{month}} 
      <button class="circular ui icon button" v-on:click="incrementMonth()">
        <i class="angle right icon"></i>
      </button>
    </div>
    <div class="ui horizontal list">
      <a class="item" v-scroll-to="'#hackathons'">Hackathons</a>
      <a class="item" v-scroll-to="'#conferences'">Conferences</a>
      <a class="item" v-scroll-to="'#startups'">Startup Events</a>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data () {
    return {
      monthOffset: 0,
      month: moment().add(0, 'months').format('MMMM YYYY')
    }
  },
  methods: {
    incrementMonth: function () {
      this.monthOffset += 1
      this.month = moment().add(this.monthOffset, 'months').format('MMMM YYYY')
      this.$bus.$emit('dateUpdate', this.monthOffset)
    },
    decrementMonth: function () {
      this.monthOffset -= 1
      this.month = moment().add(this.monthOffset, 'months').format('MMMM YYYY')
      this.$bus.$emit('dateUpdate', this.monthOffset)
    }
  }
}
</script>
<style scoped>
.ui.row {
  text-align: center;
  margin-bottom: 0 !important;
  padding: 30px 0;
}

.header {
  padding: 30px 0;
}

.header .logo {
  height: 50px;
  width: auto;
}

.month {
  font-size: 1.4em;
}

</style>
