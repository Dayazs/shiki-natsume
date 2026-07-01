import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 顶部导航栏
      path: '/topnav',
      component: () => import('@/components/TopNav/index.vue'),
    },
    {
      // 首页
      path: '/hero',
      component: () => import('@/components/Hero/index.vue'),
    },
    {
      // 吧台
      path: '/bar',
      component: () => import('@/components/Bar/index.vue'),
    },
  ],
})

export default router
