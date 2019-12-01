import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'


import $ from 'jquery'

Vue.use(VueRouter)

var url = 'user/list.vue';
var useradd = 'user/add.vue';


const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/login/login.vue')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'menuActiveStyle'
})


router.beforeEach((to, from, next) => {
  GetMenusForUser('123')
  next()
})

// store.dispatch('setMenus', routes)
/** 
 * 从后台获取用户菜单
 */
function GetMenusForUser(userCode) {
  if (store.state.menusIfLoaded) {
    console.log('菜单已经获取过了')
    return
  }
  // store.dispatch('setMenus', authRoutes)
  $.ajax({
    type: "post",
    url: "http://localhost:5502/api/values/LoadMenus",
    dataType: "json",
    data: {
      '': userCode
    },
    success: data => {
      const menus = JSON.parse(data);
      var routes = [],
        routeList = [];
      ReplaceComponent(menus, routes)
      addDynamicRoutes(routes, routeList)
      router.addRoutes(routeList);
      // router.addRoutes(authRoutes);
      store.commit('setMenusIfLoaded', true)
      store.dispatch('setMenus', routeList)
      // alert(data)
    },
    error: error => { console.log(error)}
  });
}

function ReplaceComponent(menus = [], routes = []) {
  for (let i = 0; i < menus.length; i++) {
    const component = menus[i].component;
    // debugger
    
    var route = {
      path: menus[i].path,
      component: () => import(`@/views/${component}`),
      name: menus[i].name,
      leaf: menus[i].leaf,
      menuShow: menus[i].menuShow,
      iconCls: 'iconfont icon-home',
      id: menus[i].id,
      pid: menus[i].pid
    }
    // route.component = () => import(`@/listen/${url}.vue`);
    routes.push(route);
  }
}


/** 
 * 递归动态添加路由
 */

//*
function addDynamicRoutes(routes = [], routeList = []) {
  // debugger
  // var temp = []

  for (let i = routes.length - 1; i >= 0; i--) {
    // 当是父级时
    if (!routes[i].pid) {
      routes[i].children = [];
      routeList.push(routes[i]);
      routes.splice(i, 1);
    }
  }

  for (let i = 0; i < routeList.length; i++) {
    for (let j = routes.length - 1; j >= 0; j--) {
      if (routeList[i].id === routes[j].pid) {
        routeList[i].children.push(routes[j]);
        routes.splice(j, 1)
      }
    }
  }
}
//*/


export default router