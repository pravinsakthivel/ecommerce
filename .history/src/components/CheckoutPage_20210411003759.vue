<template>
  <div class="row">
    <billing-address-page></billing-address-page>
    <div class="col-md-6">
      <payment-details></payment-details>
    </div>
  </div>
</template>
<script>
import BillingAddressPage from './BillingAddressPage.vue';
import PaymentDetails from "./PaymentDetails.vue";

export default {
  components: {
    PaymentDetails,
    BillingAddressPage,
    
  }
};
</script>
