import Vue from 'vue'
import Router from 'vue-router'
import board from '@/components/board'
import Doglist from '@/components/Doglist'
import DogBreed from '@/components/DogBreed'
import subbreedImages from '@/components/subbreedImages'
// import App from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/board',
      component: board
    },
    {
      path: '/dogs',
      component: Doglist
    },
    {
      path: '/dog-image/:breed',
      component: DogBreed
    },
    {
      path: '/dog-image/:breed/:subbreed',
      component: subbreedImages
    }
  ]
})
