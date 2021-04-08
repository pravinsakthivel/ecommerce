import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
