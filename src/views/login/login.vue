<style lang="less" scoped>
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <div icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <input type="text" />
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </div>
    </div>
  </div>
</template>