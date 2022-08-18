import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '牵寻官网'
    }
  },

]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router