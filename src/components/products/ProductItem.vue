<template>
  <div
    class="col-md-4  col-lg-3 col-sm-12 mb-2"
    v-for="product in productsList"
    :key="product.id"
  >
    <div class=" card mb-3">
      <div class="card-body ">
        <img
          :src="product.productImage"
          class="card-img-top img-height"
          alt="img"
        />
        <hr />
        <h5 class="card-title pricing-card-title">
          {{ product.productName }}
          <base-badge v-if="productsIncart.includes(product.productId)"
            >In cart</base-badge
          >
        </h5>
        <hr />
        <div class="mt-auto">
        <p class="card-text">
          <strong>Price : ${{ product.price }}</strong>
        </p>
          <base-button
            @click-action="addToCart(product)"
            :disabled="productsIncart.includes(product.productId)"
            customClass=""
            >Add to Cart</base-button
          >
          <base-button
            @click-action="showDescription(product)"
            customClass="ml-5 sm-ml-2"
            >Details</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["productsList"],
  emits: ["show-description"],
  methods: {
    addToCart(product) {
      product["quantity"] = 1;
      this.$store.dispatch("products/addProductItemToCart", product);
    },
    showDescription(product) {
      this.$emit("show-description", product);
    },
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
  width: 100%;
  object-fit: cover;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media (max-width: 1200px) {
  .img-height {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .sm-ml-2{
    margin-left: 2px !important;
  }
}
@media (max-width: 600px) { /* extra small devices */
  .img-height {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  
  .sm-ml-2{
    margin-left: 2px !important;
  }
}
</style>
