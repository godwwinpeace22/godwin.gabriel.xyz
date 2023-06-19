import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _86bb64aa = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6044140a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _50a714b2 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _6a8ac44c = () => interopDefault(import('../pages/blog/_blog.vue' /* webpackChunkName: "pages/blog/_blog" */))
const _fa2cc788 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/blog",
    component: _86bb64aa,
    name: "blog"
  }, {
    path: "/contact",
    component: _6044140a,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _50a714b2,
    name: "portfolio"
  }, {
    path: "/blog/:blog",
    component: _6a8ac44c,
    name: "blog-blog"
  }, {
    path: "/",
    component: _fa2cc788,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
