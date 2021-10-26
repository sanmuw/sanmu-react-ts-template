// const Home = () => import(/* webpackChunkName: 'home' */ '@/pages/home')
// const About = () => import(/* webpackChunkName: 'about' */ '@/pages/about')
import Home from '@/pages/home'
import About from '@/pages/about'
import Sanmu from '@/pages/sanmu/demo01'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/001',
    component: Sanmu
  }
]