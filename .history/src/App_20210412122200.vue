<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.onpopstate = (event) => {
      if (
        this.$store.getters["products/getUserName"] != "" &&
        this.$route.path == "/login"
      ) {
        
        console.log("")
        this.$router.push("/products");
      }
    };
  },
};
</script>

<style></style>
