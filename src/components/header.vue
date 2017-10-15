<template>
  <div class="header ui row">
    <img class="logo" src="../assets/logo.png">
    <github-buttons-component></github-buttons-component>
    <div class="month ui row">{{month}}</div>
    <ul>
      <li><a href="#hackatons">Hackatons</a></li>
      <li><a href="#conferences">Conferences</a></li>
      <li><a href="#startups">Startup Events</a></li>
    </ul>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data () {
    return {
      month: moment().format('MMMM YYYY')
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

.header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header ul li {
  display: inline;
  padding: 0 5px;
}

.month {
  font-size: 1.4em;
}

</style>
