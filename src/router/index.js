import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import CharitableProject from '../views/charitableProjects/index.vue';
import Community from '../views/community/index.vue';
import Information from '../views/Information/index.vue';
import AboutUs from '../views/aboutUs/index.vue';
import PersonalCenter from '../views/personalCenter/index.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'charitable-project', component: CharitableProject },
      { path: 'community', name: 'community', component: Community },
      { path: 'information', name: 'information', component: Information },
      { path: 'about-us', name: 'about-us', component: AboutUs },
      { path: 'personal-center', name: 'personal-center', component: PersonalCenter },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;