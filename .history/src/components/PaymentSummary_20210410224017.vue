<template>
  <div>
    <h3 class="text-center">Payment Summary</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.productId">
          <td>{{ item.productName }}</td>
          <td>{{ item.quantity }}</td>
          <td>$ {{ item.cartValue ? item.cartValue : item.price }}</td>
        </tr>
        <tr>
          <td colspan="2" class="text-right">Total Amount</td>
          <td>
            <strong>$ {{ totalCartValue }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props:['cartItems','totalCartValue']
};
</script>
