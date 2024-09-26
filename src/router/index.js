import { createRouter, createWebHistory } from "vue-router";
import charitableProjectsRoutes from "./charitableProjects";
import communityRoutes from "./community";
import informationRoutes from "./information";
import aboutUsRoutes from "./aboutUs";
import personalCenterRoutes from "./personalCenter";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("@/views/charitableProjects/index.vue")},
      {
        path: "charitable-projects",
        name: "charitable-projects",
        component: () => import("@/views/charitableProjects/index.vue"),
        children: charitableProjectsRoutes,
        redirect: { name: "platform-charity" },
      },
      {
        path: "community",
        name: "community",
        component: () => import("@/views/community/index.vue"),
        children: communityRoutes,
        redirect: { name: "invitation" },
      },
      {
        path: "information",
        name: "information",
        component: () => import("@/views/Information/index.vue"),
        children: informationRoutes,
        redirect: { name: "activity-news" },
      },
      {
        path: "about-us",
        name: "about-us",
        component: () => import("@/views/aboutUs/index.vue"),
        children: aboutUsRoutes,
        redirect: { name: "foundation-introduction" },
      },
    ],
  },
  {
    path: "/personal-center",
    name: "personal-center",
    component: () => import("@/layouts/UserLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/personalCenter/index.vue"),
        redirect: { name: "personal-data" },
      },
      ...personalCenterRoutes,
    ],
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的滚动位置，使用它 (例如浏览器后退操作)
    if (savedPosition) {
      return savedPosition;
    } else {
      // 否则滚动到页面顶部
      return { top: 0 };
    }
  },
});

export default router;
