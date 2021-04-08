<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-3"
        v-for="(product, index) in productItems"
        :key="product.id"
      >
        <div class="card">
          <div class="card-body">
            <img
              :src="product.productImage"
              class="card-img-top img-height"
              alt="..."
              height="100px"
            />
            <hr />
            <h5 class="card-title">
              {{ product.productName }}
              <base-badge v-if="showBadge">In cart</base-badge>
            </h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button
              class="btn btn-primary"
              @click.prevent="addToCart(product.productId, index)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
  emits: ["add-to-cart"],
  data() {
    return {
      toShow: false,
    };
  },
  methods: {
    addToCart(productId, index) {
      this.showBadge = true;
      this.$emit("add-to-cart", productId);
    },
  },
  computed: {
    showBadge() {
      return this.showBadge;
    },
  },
};
</script>
<style scoped>
.img-height {
  height: 15vw;
  object-fit: cover;
}
</style>
