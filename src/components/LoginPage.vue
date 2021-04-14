<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <label for="userName">User Name</label>
                <input
                  type="text"
                  id="userName"
                  class="form-control"
                  :class="{ 'is-invalid': errorClass }"
                  placeholder="Username"
                  required
                  autofocus
                  v-model="userName"
                />
              </div>
              <base-button
                customClass="btn mt-3  btn-primary btn-block text-uppercase"
                @click-action="login"
                >Sign in</base-button
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      errorClass: false,
    };
  },
  methods: {
    login() {
      if (this.userName != "") {
        this.errorClass = false;
        this.$store.dispatch("products/setUser", this.userName);
        this.$router.push("/products");
      } else {
        this.errorClass = true;
      }
    },
  },
};
</script>
