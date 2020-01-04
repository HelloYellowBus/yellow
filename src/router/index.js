// import firebase from 'firebase'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      meta: {
        requiresAuth: true
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
//   if ((to.path !== '/login' && to.path !== 'login') && requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('main')
//   else next()
// })

export default router
