<template>
  <div>
    这里是详情页
  </div>
</template>

<script>
export default {
  data() {
    return {
      Id:this.$route.query.id
    };
  },
  methods: {
    GetUserInfoById(){
      console.log(this.Id)
    }
  },
  mounted() {
this.GetUserInfoById();
  }
};
</script>

<style lang="less" scoped>
</style>