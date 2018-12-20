export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: resolve => require(['../components/Home.vue'], resolve)
  }
]
