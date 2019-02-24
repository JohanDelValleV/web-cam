import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#DD2C00',
    secondary: '#FF5722',
    accent: '#FF3D00',
    error: '#D50000'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

