import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/ProductList.vue";
import CartList from "./components/CartList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: "/cartIems",
      component: CartList,
    },
    {
      path: "/products",
      component: ProductList,
    },
  ],
});

export default router;
