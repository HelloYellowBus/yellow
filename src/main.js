import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

let app = ''

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1o4F5c6CHa0anE94zEQs4elHWna4Ar-E",
  authDomain: "helloyellowbus.firebaseapp.com",
  databaseURL: "https://helloyellowbus.firebaseio.com",
  projectId: "helloyellowbus",
  storageBucket: "helloyellowbus.appspot.com",
  messagingSenderId: "93829640799",
  appId: "1:93829640799:web:c42a7f8fa5b319ea1021ea",
  measurementId: "G-JGWE7MGVLX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.use(VueGoogleMaps, {
  load: {
    key:'AIzaSyAl3i41hhF-N6l2WNtyCLMtkWXkRdR4q1s',
    libraries: 'places, drawing, visualization'
  },
  installComponents: true
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
