import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import 'bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseButton from "./components/UI/BaseButton.vue";
import BaseBadge from './components/UI/BaseBadge.vue';
import LoadScript from "vue-plugin-load-script";



const app = createApp(App);
app.use(router);
app.use(store);
app.use(LoadScript);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.mount('#app');
