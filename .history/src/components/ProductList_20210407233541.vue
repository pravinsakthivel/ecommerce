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

      <base-button @click-action="searchProduct">Search</base-button>
      <shopping-cart-icon
        :cartItemsCount="cartItems.length"
        @go-to-cart="goToCart"
      ></shopping-cart-icon>
    </form>
  </nav>
  <div class="mt-5">
    <product-item
      :products="productItems"
      @add-to-cart="addToCart"
    ></product-item>
  </div>
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
      productItems:[]
    };
  },
  created() {
    this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      let url =
        "https://products-data-b01f9-default-rtdb.firebaseio.com/products/-MXaxOFKGRgCKs_OkzrR.json";
      let response = await fetch(url);
      let responseData = await response.json();
      this.$store.dispatch("products/setProducts", responseData);
    },
    addToCart(productId) {
      let productItems = this.$store.getters["products/getProducts"];
      let item = productItems.find((product) => product.productId == productId);
      this.$store.dispatch("products/updateCart", item);

      //update the productItems array
      productItems.forEach((element) => {
        if (element.productId == productId) {
          element["inCart"] = true;
          element["quantity"] = 1;
          element["cartvalue"] = element.price;
        }
      });
      this.$store.dispatch("products/setProducts", productItems);
    },
    goToCart() {
      this.$router.push("/cartIems");
    },
    searchProduct() {
      this.isItemAddedToCart();
      let products = this.$store.getters["products/getProducts"];
      if (this.searchText != "") {
        return products.filter((product) => {
          let productName = product.productName;
          return (
            productName.toUpperCase().indexOf(this.searchText.toUpperCase()) !=
            -1
          );
        });
      }
      this.productItems = products;
    },
    isItemAddedToCart() {
      let productsInCart = this.$store.getters["products/getCartItemsId"];
      let products = this.$store.getters["products/getProducts"];
      products.forEach((product) => {
        if (productsInCart.includes(product.productId)) {
          product["inCart"] = true;
        }
      });
      this.$store.dispatch("products/setProducts", products);
    },
    doGet(url) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.$store.dispatch("products/setProducts", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filteredProducts() {
      this.isItemAddedToCart();
      let products = this.$store.getters["products/getProducts"];
      if (this.searchText != "") {
        return products.filter((product) => {
          let productName = product.productName;
          return (
            productName.toUpperCase().indexOf(this.searchText.toUpperCase()) !=
            -1
          );
        });
      }
      return products;
    },
    cartItems() {
      return this.$store.getters["products/getCartItems"];
    },
  },
};
</script>
