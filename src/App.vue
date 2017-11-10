<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style lang="stylus">
@import '~variables'

main
  text-align center

header
  margin 0
  height 10px
  background-color: #181c20;
.layout-page
  margin-top: 50px;
</style>
