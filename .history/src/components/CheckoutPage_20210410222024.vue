<template>
<div class="row">
  <div class="col-md-12">
    <div class="col-md-6 ">
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
              value=""
              required
            />
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="LastName"
              value=""
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
          />
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option>India</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="custom-select d-block w-100" id="state" required>
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
              required
            />
          </div>
        </div>
        <hr class="mb-4" />
      </form>
      
    </div>
    <div class="col-md-6 ">
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
              value=""
              required
            />
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="LastName"
              value=""
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
          />
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option>India</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="custom-select d-block w-100" id="state" required>
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
              required
            />
          </div>
        </div>
      </form>
      
    </div>
    <!-- <div class="col-md-6">
      <payment-details></payment-details>
    </div> -->
    
  </div>
  </div>
</template>
<script>
//import PaymentDetails from "./PaymentDetails.vue";

export default {
  components: {
   // PaymentDetails,
  },
};
</script>
