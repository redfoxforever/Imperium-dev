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
      redirect: '/cabinet/home',
      component: () => import('@/views/CabinetView.vue'), 
      children: [
        {
          path: 'home',
          name: 'cabinet home',
          component: () => import('@/views/CabinetHome.vue'), 
        },
        {
          path: 'traders',
          name: 'cabinet traders',
          component: () => import('@/views/CabinetTraders.vue'), 
        },
        {
          path: 'statistics',
          name: 'cabinet statistics',
          component: () => import('@/views/CabinetStatis.vue'), 
        },
        {
          path: 'instruction',
          name: 'cabinet instruction',
          component: () => import('@/views/CabinetInstruction.vue'), 
        },
        {
          path: 'support',
          name: 'cabinet support',
          component: () => import('@/views/CabinetSupport.vue'), 
        },
      ]
    },
    
  ]
})

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
})

export default router
