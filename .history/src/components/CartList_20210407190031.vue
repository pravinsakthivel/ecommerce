<template>
  <div class="container-fluid">
    <div class="row" v-for="item in cartItems" :key="item.productId">
      <div class="col-12 mt-3">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                :src="item.productImage"
                alt="Card image"
                class=" img-height"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ item.productName }}</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>Price : ${{item.price}}</p>
              <base-button @click-action="removeFromCart(item.productId)"
                >Remove Item</base-button
              >
              <base-button>Checkout</base-button>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cartItems.length < 1">
      <div class="alert alert-info">
        <strong>Your Cart is Empty!!</strong> Go to products to add items.
      </div>
      <base-button @click-action="goToProducts">Explore Items</base-button>
    </div>
  </div>
</template>
<script>
import BaseButton from "./UI/BaseButton.vue";
export default {
  components: { BaseButton },
  computed: {
    cartItems() {
      return this.$store.getters["products/getCartItems"];
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch("products/removeCartItem", productId);
    },
    goToProducts() {
      this.$router.push("/products");
    },
  },
};
</script>
<style scoped>
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
.img-height {
  height: 15vw;
  object-fit: cover;
}
</style>
