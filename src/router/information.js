export default [
  {
    path: "activity-news",
    name: "activity-news",
    component: () => import("../views/Information/components/ActivityNews.vue"),
  },
  {
    path: "research-reports",
    name: "research-reports",
    component: () =>
      import("../views/Information/components/ResearchReports.vue"),
  },
];
