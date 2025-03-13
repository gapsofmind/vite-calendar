/* import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router"; 
import App from "./SPAApp.vue"; */


const app = Vue.createApp({})

const About = { template: '<h1>Om</h1>' }

const Contact = { template: '<h1>Kontakt</h1>' }

const Home = { template: '<h1>Hem</h1>' }

const routes = [
  {
    component: About,
    path: '/about'
  },
  {
    component: Contact,
    path: '/contact'
  },
  {
    component: Home,
    path: '/'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

app.use(router)

app.mount('#app')