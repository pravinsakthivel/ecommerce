<template>
 <router-view></router-view>
 <div class="text-center text-dark p-3 footer" style="background-color: rgba(0, 0, 0, 0.2);">
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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
