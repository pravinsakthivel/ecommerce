<template>
  <div>
    <h3>Price Details</h3>
    <hr />
    <div class="card">
      <ul class="list-group list-group-flush" v-for="item in cartItems" :key="item.productId">
        <li class="list-group-item">{{item.productName}} * {{item.quantity}} : {{item.cartvalue}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    props:['cartItems']
}
</script>
