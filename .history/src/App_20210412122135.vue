<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.onpopstate = (event) => {
      if (
        console.log()
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
