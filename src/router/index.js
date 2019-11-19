import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import $ from 'jquery'

Vue.use(VueRouter)

var url = 'user/List.vue';
var useradd = 'user/add.vue';


const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    name: '用户列表',
    component: () => import(`@/views/${url}`)
  }, {
    path: '/useradd',
    name: '添加用户',
    component: () => import(`@/views/${useradd}`)
  }, {
    path: '/login',
    name: '登录',
    component: () => import('../views/login/login.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   $.ajax({
//     type: 'post',
//     url: '',
//     dataType: 'json',
//     success: () => {

//     }
//   })

// })

export default router