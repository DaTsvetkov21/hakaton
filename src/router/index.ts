import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/TasksPage.vue'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: routes.AUTH.path,
      name: routes.AUTH.name,
      component: () => import('@/views/AuthPage.vue')
    }

  ]
})

export default router
