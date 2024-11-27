import { createRouter, createWebHistory } from "vue-router";

export const RouteNames = {
  PROJECTS: "projects",
  RESUME: "resume",
  CONTACT: "contact",
} as const;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/resume",
    },
    {
      path: "/projects",
      name: RouteNames.PROJECTS,
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/resume",
      name: RouteNames.RESUME,
      component: () => import("../views/ResumeView.vue"),
    },
    {
      path: "/contact",
      name: RouteNames.CONTACT,
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "fallback",
      redirect: "/",
    },
  ],
});

export default router;
