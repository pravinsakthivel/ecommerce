<template>
  <div class="container-fluid">
    <navigation-bar></navigation-bar>
    <search-bar @search-product="searchProduct"></search-bar>

    <div class=" row mt-5">
          <div class="loader"></div>

      <product-description-modal
        :cProduct="cProduct"
      ></product-description-modal>
      <product-item
        :productsList="productToDisplay"
        @product-detail="productDetail"
      ></product-item>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import NavigationBar from "./UI/NavigationBar.vue";
import SearchBar from "./UI/SearchBar.vue";
import ProductDescriptionModal from "./UI/ProductDescriptionModal.vue";
export default {
  components: {
    ProductItem,
    NavigationBar,
    SearchBar,
    ProductDescriptionModal,
  },
  data() {
    return {
      onSearch: false,
      cProduct: "",
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
            productName.toUpperCase().indexOf(searchText.toUpperCase()) != -1
          );
        });
      }
      this.$store.dispatch("products/setSearchedItems", searchResults);
    },
    goToHome() {
      this.$router.push("/products");
    },
    productDetail(product) {
      this.cProduct = product;
      document.getElementById("productItemModal").style.display = "block";
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
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
