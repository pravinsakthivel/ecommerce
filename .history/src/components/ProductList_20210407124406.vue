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
          <shopping-cart-icon :cartItemsCount="cartItems.length" @go-to-cart="goToCart"></shopping-cart-icon>

    </form>
  </nav>
  <product-item
    :products="filteredProducts"
    @add-to-cart="addToCart"
  ></product-item>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import ShoppingCartIcon from "./UI/ShoppingCartIcon.vue";
export default {
  components: {
    ProductItem,
    ShoppingCartIcon,
  },
  data() {
    return {
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
          this.$store.dispatch('products/setProducts',data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(productId) {
      let products = this.$store.getters.getProducts;
      let product = products.find(
        (product) => product.productId == productId
      );
      this.$store.dispatch('products/addTocart',product);
    },
    goToCart() {
      this.$router.push("/cartIems");
    },
  },
  computed: {

    filteredProducts() {
      let filteredProducts = this.$store.getters.products;
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
