<template>
  <div class="col-md-6 ">
    <h4 class="mb-3 text-center">Billing Address</h4>
    <form>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="FirstName"
            :disabled="disabled"
            v-model="firstName"
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="LastName"
            v-model="lastName"
            :disabled="disabled"
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
          :disabled="disabled"
        />
      </div>

      <div class="mb-3">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Address Line 1"
          :disabled="disabled"
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
          :disabled="disabled"
        />
      </div>

      <div class="row">
        <div class="col-md-5 mb-3">
          <label for="country">Country</label>
          <select
            class="custom-select d-block w-100"
            id="country"
            v-model="country"
            :disabled="disabled"
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
            :disabled="disabled"
          >
            <option value="">Choose...</option>
            <option>Karnataka</option>
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
            :disabled="disabled"
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
          >Proceed to Payment</base-button
        >
        <base-button
          v-show="disabled"
          customClass="btn-background-black mb-5 mt-5 ml-2 "
          @click-action="editAddress"
          >Edit Address</base-button
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
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
      disabled: false,
    };
  },
  methods: {
    validateAddress() {
      if (
        this.firstName == "" ||
        this.lastName == "" ||
        this.country == "" ||
        this.state == "" ||
        this.addressLine1 == ""
      ) {
        this.isError = true;
      } else {
        this.isError = false;
        this.disabled = true;
        this.$store.dispatch("products/enablePayment", true);
      }
    },
    editAddress() {
      this.disabled = false;
    },
  },
};
</script>

