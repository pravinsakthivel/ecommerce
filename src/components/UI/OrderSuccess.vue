<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-sm-12 col-sm-offset-3">
        <div>
      <i class="checkmark">✓</i>
    </div>
    <h1>Success</h1>
    <p>
      We received your purchase request;<br />
      we'll be in touch shortly!
    </p>
        <base-button link toPage="/products" customClass="mt-5">Go To Home</base-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  text-align: center;
  padding: 40px 0;
  background: #ebf0f5;
}
h1 {
  color: #88b04b;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #404f5e;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin: 0;
}
i {
  color: #9abc66;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
}
.card {
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
}
</style>
