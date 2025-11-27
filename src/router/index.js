import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Composition from '../views/Composition.vue'
import Landingpage from '../views/Landingpage.vue'
import Login from '../pages/authentications/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: Landingpage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/composition',
      name: 'composition',
      component: Composition
    },
     {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ],
})

export default router
