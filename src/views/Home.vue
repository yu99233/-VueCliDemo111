<template>
  <div class="home">
    <div class="left">
      <div v-for="item in menus" :key="item.id">
        <h4 v-if="item.menuShow">{{item.name}}</h4>
        <div v-for="chi in item.children" :key="chi.id">
          <router-link :to="chi.path">{{chi.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="right">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      menus: []
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    Init() {
      // debugger
      window.console.log(this.$router);
      window.console.log(this.$store.state.menus);
      this.menus = this.$store.state.menus;
      // alert(1)
      for (let i = 0; i < this.menus.length; i++) {
        var item = this.menus[i];
        if (item.children) {
          for (let j = 0; j < item.children.length; j++) {
            console.log(j, item.children[j]);
          }
        }
      }
    }
  },
  mounted() {
    this.Init();
  }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  justify-content: left;

  .left {
    width: 20%;
    background: #ffeb3b;
  }

  .right {
    width: 80%;
    // background: #93cf93;
    height: 900px;
    padding: 0 15px;
  }
}
</style>
