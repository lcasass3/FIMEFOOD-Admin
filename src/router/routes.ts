export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login/LoginPage.vue')
  }
]
