<template>        
  <payment-summary></payment-summary>
  <paypal-component></paypal-component>
</template>
<script>
import PaypalComponent from './PayPalComponent.vue';
import PaymentSummary from './PaymentSummary.vue';
export default {
  components:{
    PaypalComponent,
    PaymentSummary
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
    cartItems() {
      return this.$store.getters["products/getCartItems"];
    }
  }
};
</script>
