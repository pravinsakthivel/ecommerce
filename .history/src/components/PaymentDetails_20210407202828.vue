<template>
  <div>
    <h3>Price Details</h3>
    <hr />
    <div class="card">
      <ul class="list-group list-group-flush" v-for="item in cartItems" :key="item.productId">
        <li class="list-group-item">({{item.productName}} * {{item.quantity}}) : $ {{item.cartValue}}</li>
      </ul>
      <h4>Total Amount <span>{{totalPrice}}</span></h4>
    </div>
  </div>
</template>
<script>
export default {
    props:['cartItems'],
    computed:{
        totalPrice(){
            let cartvalue;
            this.cartItems.forEach(element => {
               cartvalue += element.cartValue;
            });
            return cartvalue;
        }
    }
}
</script>
