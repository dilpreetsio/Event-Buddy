<template>
  <div class="header ui row">
    <img class="logo" src="../assets/logo.png">
    <div class="month ui row">{{month}}</div>
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

.month {
  font-size: 1.4em;
}

</style>
