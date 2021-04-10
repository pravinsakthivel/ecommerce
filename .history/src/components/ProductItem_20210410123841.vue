<template>
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  <div
    class="col-md-6  col-lg-3 col-sm-12 mb-2"
    v-for="product in productsList"
    :key="product.id"
  >
    <div class="card h-100 ">
      <div class="card-body">
        <img
          :src="product.productImage"
          class="card-img-top img-height"
          alt="img"
        />
        <hr />
        <h5 class="card-title">
          {{ product.productName }}
          <base-badge v-if="productsIncart.includes(product.productId)"
            >In cart</base-badge
          >
        </h5>
        <hr />
        <p class="card-text">
          <strong>Price : ${{ product.price }}</strong>
        </p>
        <base-button
          @click-action="addToCart(product)"
          :disabled="productsIncart.includes(product.productId)"
          >Add to Cart</base-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ["productsList"],
  methods: {
    addToCart(product) {
      product["inCart"] = true;
      product["quantity"] = 1;
      this.$store.dispatch("products/addProductItemToCart", product);
    }
  },
  computed: {
    productsIncart() {
      return this.$store.getters["products/getproductIdsIncart"];
    },
  },
};
</script>
<style scoped>
.img-height {
  height: 300px;
  width: 232px;
  object-fit: cover;
}
@media (min-width: 320px) {
  .img-height {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}
@media (min-width: 480px) {
  .img-height {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}
@media (min-width: 600px) {
  .img-height {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
