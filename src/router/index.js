import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import About from '@/components/page/About'
import Work from '@/components//page/Work'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'header-top': Header
      }
    },
    {
      path: '/work',
      name: 'Work',
      components: {
        default: Work,
        'header-top': Header
      }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        default: About,
        'header-top': Header
      }
    }
  ]
})
