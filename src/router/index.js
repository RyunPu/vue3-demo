import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Todos.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../views/Images.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
