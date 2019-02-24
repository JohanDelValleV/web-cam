import Vue from 'vue'
import Router from 'vue-router'
import Client from '@/components/Client'
import Server from '@/components/Server'
import Main from '@/components/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'main',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/client',
      name: 'client',
      component: Client
    },
    {
      path: '/server',
      name: 'server',
      component: Server,
    },
  ]
})
export default router