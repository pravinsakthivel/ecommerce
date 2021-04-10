<template>
  <div class="container-fluid">
    <navigation-bar></navigation-bar>
    <search-bar @search-product="searchProduct"></search-bar>

    <div class=" row mt-5">
      <div class="modal" id="productItemModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
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
export default {
  components: {
    ProductItem,
    NavigationBar,
    SearchBar,
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
.input-width {
  width: 100%;
}
.img-width {
  width: 100px;
}
</style>
