import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "实验室管理系统"
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {//日志
      path: '/Log',
      name: 'Log',
      component: () => import('../views/LogView.vue')
    },
    {//文章
      path: '/article/:id',
      name: 'Article',
      component: () => import('../views/ArticleView.vue'),
      meta: {
        title: "文章"
      },
    },
    {//车队
      path: '/Motorcade',
      name: 'Motorcade',
      component: () => import('../views/MotorcadeView.vue'),
      meta: {
        title: "车队"
      },
    },
    {//元素
      path: '/Element',
      name: 'Element',
      component: () => import('../views/ElementView.vue'),
      meta: {
        title: "元素"
      },
    },
    {//轨迹
      path: '/Locus',
      name: 'Locus',
      component: () => import('../views/LocusView.vue'),
      meta: {
        title: "轨迹"
      },
    },
    {//赛道
      path: '/Track',
      name: 'Track',
      component: () => import('../views/TrackView.vue'),
      meta: {
        title: "赛道"
      },
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404View.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]

})
// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default router
