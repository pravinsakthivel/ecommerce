<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="#">
      <img src="../assets/continental.png" width="130" height="60" alt="" />
    </a>
    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchText"
      />
      <button
        class="btn btn-primary my-2 my-sm-0"
        type="submit"
        @click.prevent="searchProduct"
      >
        Search
      </button>
      <i class="fa fa-shopping-cart fa-2x" @click.prevent="goTocart"></i>
      <span
        class="badge badge-warning"
        id="lblCartCount"
        v-if="cartItems.length > 0"
      >
        {{ cartItems.length }}</span
      >
    </form>
  </nav>
  <product-item
    :products="filteredProducts"
    @add-to-cart="addToCart"
  ></product-item>
</template>
<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
      cartItems: [],
      searchText: "",
    };
  },
  created() {
    this.fetchProductData();
  },
  methods: {
    fetchProductData() {
      console.log("fetchData");
      fetch(
        "https://products-data-b01f9-default-rtdb.firebaseio.com/products/-MXaxOFKGRgCKs_OkzrR.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(productId) {
      let product = this.products.find(
        (product) => product.productId == productId
      );
      this.cartItems.push(product);
    },
    goTocart() {
      console.log("cart items", this.cartItems);
    },
  },
  computed: {
    filteredProducts() {
      let filteredProducts = this.products;
      if (this.searchText != "") {
        return filteredProducts.filter((product) => {
          let productName = product.productName;
          return (
            productName.toUpperCase().indexOf(this.searchText.toUpperCase()) !=
            -1
          );
        });
      }
      return filteredProducts;
    },
  },
};
</script>
<style scoped>
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
}
</style>
