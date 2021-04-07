import { createRouter, createWebHistory } from 'vue-router';
import ProductList from './components/ProductList.vue';
import CartList from './components/CartList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        component: ProductList
    },
    {
        path: "/cartIems",
        component: CartList
    }]
});

export default router;