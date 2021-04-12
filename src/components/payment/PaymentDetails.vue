<template>        
  <payment-summary></payment-summary>
  <paypal-component v-show= "displayPaymentOption"></paypal-component>
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
    displayPaymentOption(){
      return this.$store.getters["products/enablePaymentStatus"]
    }
  }
};
</script>
