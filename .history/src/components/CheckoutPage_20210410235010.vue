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
  },
  data() {
    return {
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
  methods: {
    validateAddress() {
      if (
        this.firstName == "" ||
        this.lastName == "" ||
        this.country == "" ||
        this.state == "" ||
        this.addressLine1 == "" ||
        this.addressLine2 == ""
      ) {
        this.isError = true;
      }
    },
  },
};
</script>
