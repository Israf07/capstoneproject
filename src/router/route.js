import Login from "../pages/Login.vue"
import MainLayout from "../layouts/MainLayout.vue"
import Home from "../pages/Home.vue"
import InventoryPage from '../pages/inventory.vue'
import { computed } from "vue"
import { createRouter, createWebHistory } from "vue-router"
const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "inventory",
        component: InventoryPage
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// Setup router guard
// router.beforeResolve((to, from, next) => {
//   const store = userStore()
//   const token = computed(() => store.token)

//   if (to.matched.some((route) => route.meta.requiresAuth)) {
//     if (!token.value) {
//       next({ path: "/login" })
//     } else {
//       checkAdminAccess()
//     }
//   } else {
//     next()
//   }

//   function checkAdminAccess() {
//   }
// })

export default router
