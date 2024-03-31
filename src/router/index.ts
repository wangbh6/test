import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Capital from '../pages/home/capital/Capital.vue'
import Form from '../pages/home/capital/form/Form.vue'
import Flow from '../pages/home/capital/flow/Flow.vue'
import Source from '../pages/home/capital/source/Source.vue'
import System from '../pages/home/system/System.vue'
import User from '../pages/home/system/user/User.vue'
import Login from '../pages/login/Login.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/capital/form',
      meta: {
        isLogin: true
      },
      children: [
        {
          path: '/capital',
          name: 'capital',
          component: Capital,
          children: [
            {
              path: '/capital/form',
              name: 'form',
              component: Form
            },
            {
              path: '/capital/flow',
              name: 'flow',
              component: Flow
            },
            {
              path: '/capital/source',
              name: 'source',
              component: Source
            }
          ]
        },
        {
          path: '/system',
          name: 'system',
          component: System,
          children: [
            {
              path: '/system/user',
              name: 'user',
              component: User
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
router.beforeEach((to, from) => {
  if (to.matched.some(v => v.meta.isLogin)) {
    const token = localStorage.getItem('token')
    if (!token) {
      return {
        path: '/login',
        query: {
          redirect: encodeURIComponent(to.fullPath)
        }
      }
    }
  }
})


export default router
