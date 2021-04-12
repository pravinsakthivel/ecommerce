<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.onpopstate = () => {//Disabling back button to login page if user is logged in
      if (
        this.$store.getters["products/getUserName"] != "" &&
        this.$route.path == "/login"
      ) {
        this.$router.push("/products");
      }
    };
  },
};
</script>

<style></style>
