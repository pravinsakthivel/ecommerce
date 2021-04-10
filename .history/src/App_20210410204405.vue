<template>
 <router-view></router-view>
 <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2021 Copyright:
    <a class="text-dark" href="#">Autostore.com</a>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
.footer {
  position: relative;
  margin-top: -150px; /* negative value of footer height */
  height: 150px;
  clear:both;
  padding-top:20px;
}
</style>
