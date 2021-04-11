import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/products/ProductList.vue";
import CartList from "./components/cart/CartList.vue";
import OrderSuccessPage from "./components/ui/OrderSuccess.vue";
import LoginPage from "./components/LoginPage.vue";
import CheckoutPage from "./components/cart/CheckoutPage.vue";
import ErrorPage from "./components/ui/ErrorPage.vue";

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
      component:CheckoutPage
    },
    {
      path:"/errorPage",
      component:ErrorPage
    }
  ],
});

export default router;
