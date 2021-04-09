import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Detail = () => import('../views/Detail.vue')
const Start = () => import('../views/Start.vue')




const routes = [
  {
    path:'/',
    name: 'Start',
    component: Start
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/detail',
    component:Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
