import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from './components/ui/BaseBadge.vue';
import TheJumbotrom from './components/ui/TheJumbotron.vue';
import BaseModal from './components/ui/BaseModal.vue';



const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.component('the-jumbotron',TheJumbotrom);
app.component('base-modal',BaseModal);
app.mount('#app');
