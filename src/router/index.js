import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import PainIndex from '@/components/PainIndex'
import PainAdd from '@/components/PainAdd'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { NoAuth: true }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pain',
      name: 'PainIndex',
      component: PainIndex
      // meta: { NoAuth: true }
    },
    {
      path: '/painadd',
      name: 'PainAdd',
      component: PainAdd
      // meta:
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !to.meta.NoAuth) {
    if (sessionStorage.getItem('phone') == null ||
      sessionStorage.getItem('password') == null) {
      next('/login')
    } else {
      next() // already login
    }
  } else {
    next() // default logic
  }
})

export default router
