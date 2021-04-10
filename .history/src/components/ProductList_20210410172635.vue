<template>
  <div class="container-fluid">
    <navigation-bar></navigation-bar>
    <search-bar @search-product="searchProduct"></search-bar>
    <div
      class="text-center"
      style="
    margin-top: 50px;"
      v-if="productToDisplay.length == 0"
    >
      <i class="fa fa-spinner fa-spin fa-3x fa-fw "></i>
      <span class="sr-only">Loading...</span>
    </div>

    <div class=" row mt-5">
      <product-description-modal
        :cProduct="cProduct"
      ></product-description-modal>
      <product-item
        :productsList="productToDisplay"
        @show-description="showDescription"
      ></product-item>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import NavigationBar from "./UI/NavigationBar.vue";
import SearchBar from "./UI/SearchBar.vue";
import ProductDescriptionModal from "./ProductDescriptionModal.vue";
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
    showDescription(product) {
      this.cProduct = product;
     document.getElementById("productItemModal").showModal();
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
