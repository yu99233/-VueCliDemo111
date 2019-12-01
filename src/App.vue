<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  font-size: 15px !important;
  line-height: 2 !important;
  
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
