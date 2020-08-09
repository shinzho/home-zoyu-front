import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import GAuth from 'vue-google-oauth2'
import store from './store'


Vue.config.productionTip = false
Vue.use(GAuth, {
  //clientId: '752284371239-2a88b3pnjhss1693md3q5mj2i8ot16nb.apps.googleusercontent.com', scope: 'email profile', prompt: 'consent', fetch_basic_profile: false
  clientId: '752284371239-bu379l8o9vemqqr26s0hgtrr7blbpg12.apps.googleusercontent.com', scope: 'email profile', prompt: 'consent', fetch_basic_profile: false
})
new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
