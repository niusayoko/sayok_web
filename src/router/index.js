import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Test from './test'
import Product from './product/product'

Vue.use(Router)

let routes = new Set([...Home, ...Test,...Product]);

export default new Router({
  mode: 'history',
  routes:  routes
})
