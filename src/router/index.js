import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import plan from '@/components/plan'
import employers from '@/components/employers'
import jobseekers from '@/components/jobseekers'
import bookatest from '@/components/bookatest'
import details from '@/components/details'
import singup from '@/components/singup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/employers',
      name: 'employers',
      component: employers
    },
    {
      path: '/jobseekers',
      name: 'jobseekers',
      component: jobseekers
    },  
    {
      path: '/bookatest',
      name: 'bookatest',
      component: bookatest
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    },
    {
      path: '/singup',
      name: 'singup',
      component: singup
    }
  ]
})
