import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/topnav', component: () => import('@/components/TopNav.vue') },
  ],
})

export default router
