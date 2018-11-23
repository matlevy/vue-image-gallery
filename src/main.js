import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyACDmcuVUgFkcrhglb3Op7C4CsI9GdsSeo',
    libraries: 'places', 
  },
});

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
