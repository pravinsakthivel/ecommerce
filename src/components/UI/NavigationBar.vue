<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.png" @click="goToHome" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown ">
            <a
              class="nav-link dropdown-toggle mt-10"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Welcome , <strong>{{userName ? userName : "Guest"}}</strong> !
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <base-button  @click-action="logout" customClass="dropdown-item">Logout</base-button>
            </div>
          </li>
          <li class="nav-item">
            <shopping-cart-icon
              class="nav-link"
              :cartItemsCount="cartItems.length"
              @go-to-cart="goToCart"
              >My Cart
            </shopping-cart-icon>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import ShoppingCartIcon from "./ShoppingCartIcon.vue";
export default {
  emits:['go-to-home'],
  components: {
    ShoppingCartIcon
  },
  computed:{
      userName(){
        return this.$store.getters['products/getLoggedInUser'];
      },
      cartItems() {
      return this.$store.getters["products/getCartItems"];
    }
  },
  methods: {
    goToCart() {
      this.$router.push("/cartIems");
    },
    goToHome() {
      this.$emit('go-to-home');
    },
    logout(){
     // console.log("logout");
      this.$store.dispatch("products/resetData");

      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
img {
  height: 100px;
}
.mt-10 {
  margin-top: 10px;
}
</style>
