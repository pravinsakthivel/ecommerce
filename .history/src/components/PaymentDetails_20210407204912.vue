<template>
  <div>
    <h3>Price Details</h3>
    <hr />
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in cartItems" :key="item.productId">
      <td>{{item.productName}}</td>
      <td>{{item.quantity}}</td>
      <td>{{item.cartValue ? item.cartValue : item.price}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
export default {
    props:['cartItems'],
    computed:{
        totalPrice(){
            let cartvalue =0;
            this.cartItems.forEach(element => {
               cartvalue += element.cartValue ? element.cartValue : element.price;
            });
            return cartvalue;
        }
    }
}
</script>
