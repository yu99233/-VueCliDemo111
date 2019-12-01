import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    // 菜单是否已经获取到了
    menusIfLoaded: false
  },
  mutations: {
    setMenus: (state, value) => {
      state.menus = value;
    },
    setMenusIfLoaded: (state, value) => {
      state.menusIfLoaded = value
    }
  },
  actions: {
    setMenus: (context, value) => {
      context.commit('setMenus', value)
    },
    setMenusIfLoaded: (context, value) => {
      context.commit("setMenusIfLoaded", value);
    }
  },
  modules: {}
})