<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.onpopstate = () => {
      if (
        this.$store.getters["products/getUserName"] != "" &&
        this.$route.path == "/login"
      ) {
        
        console.log("navigating to products")
        this.$router.push("/products");
      }
    };
  },
};
</script>

<style></style>
