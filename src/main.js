import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key:'AIzaSyAl3i41hhF-N6l2WNtyCLMtkWXkRdR4q1s',
    libraries: 'places, drawing, visualization'
  },
  installComponents: true
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
