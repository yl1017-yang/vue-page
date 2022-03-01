import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios // 다른 컴포넌트에서는 import 없이 this.$axios로 사용가능

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
