// index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Landing/Pages.vue')
    },
    {
      path: '/landing',
      name: 'Landing',
      children: [
        {
          path: 'pages',
          name: 'Pages',
          component: () => import('@/components/Landing/Pages.vue')
        },
        {
          path: 'review', // Nota: esto es 'review', no 'reviews'
          name: 'Review',
          component: () => import('@/components/Landing/Reviews.vue')
        },
        {
          path: 'qrcode',
          name: 'Qrcode',
          component: () => import('@/components/Landing/QrcodeLanding.vue')
        },
        {
          path: 'menu',
          name: 'Menu',
          component: () => import('@/components/Landing/Menu.vue')
        },
        {
          path: 'combo',
          name: 'Combo',
          component: () => import('@/components/Landing/CombosMenu.vue')
        }
      ]
    }
  ]
})

export default router
