export default [
  {
    path: "foundation-intro",
    name: "foundation-introduction",
    component: () => import("../views/aboutUs/components/FoundationIntro.vue"),
  },
  {
    path: "board-intro", 
    name: "board-intro", 
    component: () => import("../views/aboutUs/components/BoardIntro.vue"),
  },
  {
    path: "honors",
    name: "honors", 
    component: () => import("../views/aboutUs/components/Honors.vue"),
  },
  {
    path: "contact-us",
    name: "contact-us",
    component: () => import("../views/aboutUs/components/ContactUs.vue"),
  },
];
