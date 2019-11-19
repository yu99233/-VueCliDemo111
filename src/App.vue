<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user">用户列表</router-link>|
      <router-link to="/useradd">/useradd</router-link>
      
      <router-link to="/login">/登录</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
