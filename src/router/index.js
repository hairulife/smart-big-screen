import { createRouter, createWebHashHistory } from 'vue-router'

const pages = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default'
})

const components = import.meta.glob('../views/**/index.vue')

let routes = Object.entries(pages).map(([path, routeConfig]) => {
  const componentPath = path.replace('/page.js', '/index.vue')
  path = path.replace('../views', '').replace('/page.js', '') || '/'
  const name = path.split('/').filter(Boolean).join('-') || 'home'
  return {
    path,
    name,
    component: components[componentPath],
    ...routeConfig
  }
})

// 组装路由
const toTree = (routes) => {
  let tree = []
  routes.forEach((route) => {
    const parentPath = route.path.split('/').slice(0, -1).join('/') || '/'
    const item = routes.find((r) => r.path === parentPath)
    if (item && parentPath !== route.path) {
      if (!item.children) {
        item.children = []
      }
      item.children.push(route)
    } else {
      tree.push(route)
    }
  })
  return tree
}
routes = toTree(routes)

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: []
})

routes.forEach((route) => {
  router.addRoute(route)
})

export default router
