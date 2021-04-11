<template>
  <div class="row mt-5">
    <billing-address-page></billing-address-page>
    <div class="col-md-6">
      <payment-details></payment-details>
    </div>
  </div>
</template>
<script>
import BillingAddressPage from '../cart/BillingAddressPage.vue';
import PaymentDetails from "../payment/PaymentDetails.vue";

export default {
  components: {
    PaymentDetails,
    BillingAddressPage,
    
  }
};
</script>
