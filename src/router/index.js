import Vue from 'vue'
import VueRouter from "vue-router"
import BackTop1 from '../views/BackTop1.vue'
import BackTop2 from '../views/BackTop2.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/backtop1',
    name: 'BackTop1',
    component: BackTop1
  },
  {
    path: '/backtop2',
    name: 'BackTop2',
    component: BackTop2
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
    mode:"history",
    base: "/",
    routes:routers,
});

export default router;
