import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/sign',
      name: 'sign in',
      component: () => import('@/views/SignView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('@/views/404.vue')
    },
    {
      path: '/cabinet',
      name: 'cabinet',
      component: () => import('@/views/CabinetView.vue')
    }
  ]
})

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
})

export default router
