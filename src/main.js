import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// Vue.config.productionTip = false

//  eslint-disable no-new
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
Vue.use(VueRouter)
import FiancialListView from './components/1'
import FiancialDetialView from './components/2'
import hello from './App'
const routes = [
  {path: '/financialList', component: FiancialListView},
  {path: '/financialDetail', component: FiancialDetialView},
  {path: '/hello', component: hello},
]
const router = new VueRouter({routes})
new Vue({
  router
}).$mount('#app')

