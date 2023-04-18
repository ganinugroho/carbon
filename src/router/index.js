// Composables
import { createRouter, createWebHistory } from "vue-router";
import { Child } from "@/router/child";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: Child,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
