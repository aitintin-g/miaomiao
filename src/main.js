import Vue from 'vue'
//引入vue
import App from './App.vue'
//主组件将被渲染
import router from './router'
import store from './store'
//省略了index.js
import axios from 'axios'

Vue.prototype.axios=axios;
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
});

import Scroller from '@/components/Scroller';
Vue.component('Scroller',Scroller);

import Loading from '@/components/Loading';
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
