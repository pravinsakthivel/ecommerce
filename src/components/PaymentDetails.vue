<template>
  <div>
    <h3>Payment Summary</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.productId">
          <td>{{ item.productName }}</td>
          <td>{{ item.quantity }}</td>
          <td>$ {{ item.cartValue ? item.cartValue : item.price }}</td>
        </tr>
        <tr>
          <td colspan="2" class="text-right">Total Amount</td>
          <td>
            <strong>$ {{ totalCartValue }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <paypal-component :cartValue="totalCartValue"></paypal-component>
</template>
<script>
import PaypalComponent from './PayPalComponent.vue';
export default {
  components:{
    PaypalComponent
  },
  computed: {
    totalCartValue() {
      let cartvalue = 0;
      this.cartItems.forEach((element) => {
        cartvalue += element.cartValue ? element.cartValue : element.price;
      });
      console.log(cartvalue)
      return cartvalue;
    },
    cartItems(){
      return this.$store.getters['products/getCartItems']
    }
  }
};
</script>
