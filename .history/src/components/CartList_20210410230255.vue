<template>
  <div class="container-fluid">
    <the-jumbotron>My Cart</the-jumbotron>

    <div class="card mb-2" v-for="item in cartItems" :key="item.productId">
      <img :src="item.productImage" class="card-img-top" alt="productImage" />
      <div class="card-body">
        <h5 class="card-title">{{ item.productName }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <form class="form-inline">
          <label for="quantity"><strong>Quantity : </strong></label>
          <input
            type="number"
            class="form-control ml-2"
            value="1"
            min="1"
            @change="setTotalPrice($event, item.productId)"
          />
        </form>

        <p>
          <strong>
            Price : $
            <span v-text="item.cartValue ? item.cartValue : item.price"></span
          ></strong>
        </p>
        <base-modal @click-action="removeFromCart(item.productId)">
          <template #baseButton>Remove</template>
          <template #title> Remove Item</template>
          <template #body> Do you want to remove item from cart ? </template>
          <template v-slot:secondaryButton>Cancel</template>
          <template v-slot:primaryButton>Remove</template>
        </base-modal>
      </div>
    </div>
    <payment-summary></payment-summary>

    <div v-if="cartItems.length < 1" class="text-center ">
      <div class="alert alert-info ">
        <strong>Your Cart is Empty!!</strong> Go to products to add items.
      </div>
      <base-button link toPage="/products">Explore Items</base-button>
    </div>
    <div class="text-center mb-5 mt-5" v-else>
    <base-button link toPage="/checkout">Checkout</base-button>
    </div>
   
  </div>
</template>
<script>
import PaymentSummary from './PaymentSummary.vue';
export default {
  components: { PaymentSummary },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters["products/getCartItems"];
    },
  },

  methods: {
    removeFromCart(productId) {
      this.$store.dispatch("products/removeCartItem", productId);
    },
    itemPrice(price) {
      return this.quantity * price;
    },
    setTotalPrice(event, productId) {
      let cartItems = this.cartItems;
      cartItems.forEach((item) => {
        if (item.productId == productId) {
          let quantity = event.target.value;
          item.quantity = quantity;
          item.cartValue = quantity * item.price;
        }
      });
      this.$store.dispatch("products/setCartItems", cartItems);
    },
  },
};
</script>
<style scoped>
.card {
  flex-direction: row;
}
.card img {
  width: 20%;
}
</style>
