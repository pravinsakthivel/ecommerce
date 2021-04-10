<template>
  <div class="row">
    
    <div class="col-md-6">
      <payment-details :enable ="isError"></payment-details>
    </div>
  </div>
</template>
<script>
import PaymentDetails from "./PaymentDetails.vue";

export default {
  components: {
    PaymentDetails,
  }
};
</script>
