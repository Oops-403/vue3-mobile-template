import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exam',
      name: 'exam',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ExamingView.vue')
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/views/ExamScore.vue')
    },
    {
      path: '/free',
      name: 'free',
      component: () => import('@/views/FreeView.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/views/PayView.vue')
    }
  ]
})

export default router
