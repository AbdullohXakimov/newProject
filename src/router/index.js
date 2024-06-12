import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/layouts/default.vue"),
      redirect: "/home",
      children: [
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("@/pages/not-found.vue"),
        },
        {
          path: "/home",
          name: "home",
          component: home,
        },
      ],
    },

    {
      path: "/",
      component: () => import("@/layouts/authLayout.vue"),
      children: [
        {
          path: "/",
          name: "login",
          component: () => import("@/pages/auth/login.vue"),
        },
        {
          path: "/",
          name: "register",
          component: () => import("@/pages/auth/register.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  const isLoggedin = true;

  if (!isLoggedin && to.name != "login") {
    return { name: "login" };
  }
});

export default router;
