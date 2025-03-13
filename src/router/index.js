import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    { path: '/', component: HomeView }, // Main page
    { path: '/app', component: SPAApp } // Ensure this route exists
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
