import { createRouter, createWebHistory } from "vue-router";
import charitableProjectsRoutes from "./charitableProjects";
import communityRoutes from "./community";
import informationRoutes from "./information";
import aboutUsRoutes from "./aboutUs";
import personalCenterRoutes from "./personalCenter";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/charitable-projects" },
      {
        path: "charitable-projects",
        name: "charitable-projects",
        component: () => import("../views/charitableProjects/index.vue"),
        children: charitableProjectsRoutes,
        redirect: { name: 'platform-charity' }
      },
      {
        path: "community",
        name: "community",
        component: () => import("../views/community/index.vue"),
        children: communityRoutes
      },
      {
        path: "information",
        name: "information",
        component: () => import("../views/Information/index.vue"),
        children: informationRoutes,
        redirect: { name: 'activity-news' }
      },
      {
        path: "about-us",
        name: "about-us",
        component: () => import("../views/aboutUs/index.vue"),
        children: aboutUsRoutes,
        redirect: { name: 'foundation-introduction' }
      },
      {
        path: "personal-center",
        name: "personal-center",
        component: () => import("../views/personalCenter/index.vue"),
        children: personalCenterRoutes
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;