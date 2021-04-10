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

    <div v-if="cartItems.length < 1" class="text-center ">
      <div class="alert alert-info ">
        <strong>Your Cart is Empty!!</strong> Go to products to add items.
      </div>
      <base-button link toPage="/products">Explore Items</base-button>
    </div>
    <div class=" mb-5 mt-5 row" v-else>
      <div class="col-md-6">
        <h4 class="mb-3 text-center">Billing address</h4>
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="FirstName"
                required
                v-model="firstName"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="LastName"
                v-model="lastName"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email"
              >Email <span class="text-muted">(Optional)</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="EmailId"
              v-model="emailId"
            />
          </div>

          <div class="mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Address Line 1"
              required
              v-model="addressLine1"
            />
          </div>

          <div class="mb-3">
            <label for="address2"
              >Address 2 <span class="text-muted">(Optional)</span></label
            >
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Address Line 2"
              v-model="addressLine2"
            />
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select
                class="custom-select d-block w-100"
                id="country"
                v-model="country"
              >
                <option value="">Choose...</option>
                <option>India</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select
                class="custom-select d-block w-100"
                id="state"
                v-model="state"
              >
                <option value="">Choose...</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Pincode</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                v-model="pincode"
              />
            </div>
          </div>
          <div class="alert alert-danger" role="alert" v-if="isError">
            Please fill in all fields to continue payment !!
          </div>
          <div class="text-center">
            <base-button
              customClass="btn-warning mb-5 mt-5 "
              @click-action="validateAddress"
              >Deliver to this address</base-button
            >
          </div>
        </form>
        <div class="col-md-6"></div>
      </div>
      <payment-summary></payment-summary>
    </div>
    <base-button link toPage="/checkout">Checkout</base-button>
  </div>
</template>
<script>
import PaymentSummary from "./PaymentSummary.vue";
export default {
  components: { PaymentSummary },
  data() {
    return {
      quantity: 1,
       firstName: "",
      lastName: "",
      emailId: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      pincode: "",
      isError: false,
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
