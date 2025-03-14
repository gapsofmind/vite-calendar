

const app = Vue.createApp({})

const TheFirst = { template: '<h1>theFirst</h1> <p> A robot may not injure a human being or, through inaction, allow a human being to come to harm.</p>' }

const TheSecond = { template: '<h1>theSeond</h1> <p>A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.</p>' }

const TheThird = { template: '<h1>theThird</h1> <p>A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.</p>'  }


const routes = [
  {
    component: TheFirst,
    path: '/'
  },
  {
    component: TheSecond,
    path: '/thesecond'
  },
  {
    component: TheThird,
    path: '/thethird'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

app.use(router)

app.mount('#app')