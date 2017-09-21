<template>
  <div class="ui segment">
    <a :href=hack.website>
      <div class="ui grid">
        <div class="ui row">
          <div class="ui column four wide">
            <img class="ui tiny circular image fluid" src="http://photos.prnewswire.com/prnvar/20150915/266966LOGO">
          </div>
          <div class="ui column twelve wide data">
            <h3 class="ui header">
              {{hack.name}}
            </h3>
            <div class="time">
              {{hack.start}} - {{hack.end}}
            </div>
            <div class="location">
              <h5 class="ui header">
                {{hack.location}}
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
  props: ['hack']
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
