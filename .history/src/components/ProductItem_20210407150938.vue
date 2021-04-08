<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body">
            <img
              :src="product.productImage"
              class="card-img-top img-height"
              alt="..."
              height="100px"
            />
            <hr />
            <h5 class="card-title">{{ product.productName }} 
              <base-badge v-if="product.incart">In cart</base-badge>
            </h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button class="btn btn-primary"  @click.prevent="addToCart(product.productId)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
    props:['products'],
    emits:['add-to-cart'],
    methods:{
        addToCart(productId){
            this.$emit('add-to-cart',productId)
        }
    },
}
</script>
<style scoped >
.img-height {
  height: 15vw;
  object-fit: cover;
}
</style>