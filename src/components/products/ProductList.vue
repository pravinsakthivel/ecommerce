<template>
  <div class="container-fluid">
    <navigation-bar @go-to-home="goToHome"></navigation-bar>
    <search-bar
      @search-product="searchProduct"
      v-if="productToDisplay.length > 0"
    ></search-bar>
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
import ProductItem from "../products/ProductItem.vue";
import NavigationBar from "../ui/NavigationBar";
import SearchBar from "../ui/SearchBar";
import ProductDescriptionModal from "../products/ProductDescriptionModal";
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
  async created() {
    try {
      await this.$store.dispatch("products/loadProducts", false);
    }catch(error){
      this.$router.push("/errorPage");
    }
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
      this.onSearch = false;
      //force refresh - dont get data from cache
      this.$store.dispatch("products/loadProducts", true);
      this.$router.push("/products");
    },
    showDescription(product) {
      this.cProduct = product;
      document.getElementById("backdrop").style.display = "block";
      document.getElementById("productItemModal").style.display = "block";
      document.getElementById("productItemModal").classList.add("show");
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
