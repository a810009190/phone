import { createRouter, createWebHistory } from 'vue-router'
import PhoneRouter from '../views/phone'
import DetailRouter from '../views/detail'
import SearchRouter from '../views/search'

const routes = [
  {
    path: '/phone',
    name: 'phone',
    component: PhoneRouter
  },
  {
    path: '/detail/:movieId',
    name: 'detail',
    component: DetailRouter
  },
  {
    path: '/search',
    name: 'search',
    component: SearchRouter
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
