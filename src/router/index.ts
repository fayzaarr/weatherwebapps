import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CityWeather from '../views/CityWeather.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/city/:name', name: 'CityWeather', component: CityWeather, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
