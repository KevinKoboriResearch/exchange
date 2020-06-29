import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _554b53a8 = () => interopDefault(import('..\\pages\\graficos.vue' /* webpackChunkName: "pages_graficos" */))
const _d26b06e6 = () => interopDefault(import('..\\pages\\moedas.vue' /* webpackChunkName: "pages_moedas" */))
const _2a62e068 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/graficos",
    component: _554b53a8,
    name: "graficos"
  }, {
    path: "/moedas",
    component: _d26b06e6,
    name: "moedas"
  }, {
    path: "/",
    component: _2a62e068,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
