import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import News from '@/components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
