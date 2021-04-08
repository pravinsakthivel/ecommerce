import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import 'bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
