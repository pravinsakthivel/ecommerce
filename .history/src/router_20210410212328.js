import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/ProductList.vue";
import CartList from "./components/CartList.vue";
import OrderSuccessPage from "./components/UI/OrderSuccess.vue";
import LoginPage from "./components/UI/LoginPage.vue";
import CheckoutPage from "./components/CheckoutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/cartIems",
      component: CartList,
    },
    {
      path: "/products",
      component: ProductList,
    },
    {
      path: "/orderSuccessPage",
      component: OrderSuccessPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path:"/checkout",
      component:
    }
  ],
});

export default router;
