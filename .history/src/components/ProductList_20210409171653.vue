<template>
  <div class="container-fluid">
    
<navigation-bar></navigation-bar>
<search-bar @search-product="searchProduct"></search-bar>
   
    <div class=" row mt-5">
      <product-item :productsList="productToDisplay"></product-item>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import NavigationBar from "./UI/NavigationBar.vue";
import SearchBar from "./UI/SearchBar.vue";
export default {
  components: {
    ProductItem,
    NavigationBar,
    SearchBar
  },
  data() {
    return {
      onSearch: false,
    };
  },
  created() {
    this.$store.dispatch("products/loadProducts", false);
  },
  methods: {
    searchProduct(searchText) {
      this.onSearch = true;
      let products = this.$store.getters["products/getProducts"];
      let searchResults = [];
      if (searchText != "") {
        searchResults = products.filter((product) => {
          let productName = product.productName;
          return (
            productName.toUpperCase().indexOf(searchText.toUpperCase()) !=
            -1
          );
        });
      }
      this.$store.dispatch("products/setSearchedItems", searchResults);
    },
    goToHome() {
      this.$router.push("/products");
    },
  },
  computed: {
    
    productToDisplay() {
      if (this.onSearch) {
        return this.$store.getters["products/getSearchItems"];
      }
      return this.$store.getters["products/getProducts"];
    },
  },
};
</script>
<style scoped>
.input-width {
  width: 100%;
}
.img-width {
  width: 100px;
}
</style>
