import Vue from 'vue'
//引入vue
import App from './App.vue'
//主组件将被渲染
import router from './router'
import store from './store'
//省略了index.js

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
