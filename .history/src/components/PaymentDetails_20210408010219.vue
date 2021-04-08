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
            <strong>$ {{ totalPrice }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="paypal-button"></div>
</template>
<script>
export default {
  props: ["cartItems"],
  computed: {
    totalPrice() {
      let cartvalue = 0;
      this.cartItems.forEach((element) => {
        cartvalue += element.cartValue ? element.cartValue : element.price;
      });
      return cartvalue;
    },
  }
};
</script>
