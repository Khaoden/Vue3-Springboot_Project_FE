export default [
  {
    path: 'platform-charity',
    name: 'platform-charity',
    component: () => import('@/views/charitableProjects/components/PlatformCharity.vue')
  },
  {
    path: 'environmental-protection',
    name: 'environmental-protection',
    component: () => import('@/views/charitableProjects/components/EnvironmentalProtection.vue')
  },
  {
    path: "rural-revitalization",
    name: "rural-revitalization",
    component: () =>
      import("@/views/charitableProjects/components/RuralRevitalization.vue"),
  },
  {
    path: "disaster-relief",
    name: "disaster-relief",
    component: () =>
      import("@/views/charitableProjects/components/DisasterRelief.vue"),
  },
  {
    path: "disability-support",
    name: "disability-support",
    component: () =>
      import("@/views/charitableProjects/components/DisabilitySupport.vue"),
  },
  {
    path: "health-charity",
    name: "health-charity",
    component: () =>
      import("@/views/charitableProjects/components/HealthCharity.vue"),
  },
  {
    path: "international-charity",
    name: "international-charity",
    component: () =>
      import("@/views/charitableProjects/components/InternationalCharity.vue"),
  },
];
