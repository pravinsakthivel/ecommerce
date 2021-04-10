<template>
 <router-view></router-view>
 <div id="wrap">
  <div id="main" class="container clear-top">
    <p>Your content here</p>
  </div>
</div>
<footer class="footer"></footer>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
html, body {
  height: 100%;
}

#wrap {
  min-height: 100%;
}

#main {
  overflow:auto;
  padding-bottom:150px; /* this needs to be bigger than footer height*/
}

.footer {
  position: relative;
  margin-top: -150px; /* negative value of footer height */
  height: 150px;
  clear:both;
  padding-top:20px;
} 
</style>
