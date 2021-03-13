import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBl7LoJnUfTxnXiNld4JaPiHLa2CeFUyw8",
  authDomain: "fir-ada2e.firebaseapp.com",
  databaseURL: "https://fir-ada2e-default-rtdb.firebaseio.com",
  projectId: "fir-ada2e",
  storageBucket: "fir-ada2e.appspot.com",
  messagingSenderId: "877989171330",
  appId: "1:877989171330:web:867b47e2e8c1c2f1e8649b",
  measurementId: "G-D9P6BLVFBT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");