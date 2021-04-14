export default {
  async loadProducts(context, forceRefresh) {
    //load products
    if (!context.getters.shouldRefresh && !forceRefresh) {
      //send cached data
      console.log("send cached data");
      return;
    }
    let url = `https://products-data-b01f9-default-rtdb.firebaseio.com/products/-MXaxOFKGRgCKs_OkzrR.json`;
    let response = await fetch(url);
    if (response.ok && response.status == 200) {
      let responseData = await response.json();
      context.dispatch("setProducts", responseData);
      context.dispatch("setTimeStamp");
    } else {
      throw new Error("GET operation failed");
    }
  },
  setProducts(context, payload) {
    //replace products with payload
    context.commit("setProducts", payload);
  },
  addProductItemToCart(context, product) {
    //add product to cart
    let cartItems = [...context.getters.getCartItems, product];
    context.dispatch("addProductIdInCart", product.productId);
    context.commit("setCartItems", cartItems);
  },
  addProductIdInCart(context, data) {
    //add productId to cart
    let productIdsInCart = [...context.getters.getproductIdsIncart, data];
    context.commit("setProductIdsInCart", productIdsInCart);
  },
  setCartItems(context, data) {
    //replace cart items with data
    context.commit("setCartItems", data);
  },
  removeCartItem(context, productId) {
    //remove product from cart
    let cartItems = context.getters.getCartItems;
    let filteredItems = cartItems.filter((item) => {
      return item.productId != productId;
    });
    context.dispatch("removeProductIdInCart", productId);
    context.commit("setCartItems", filteredItems);
  },
  removeProductIdInCart(context, productId) {
    //remove productId from cart
    let productIdsInCart = context.getters.getproductIdsIncart;
    const index = productIdsInCart.indexOf(productId);
    if (index > -1) {
      productIdsInCart.splice(index, 1);
    }
    context.commit("setProductIdsInCart", productIdsInCart);
  },
  setSearchedItems(context, payload) {
    //set products serached
    context.commit("setSearchedItems", payload);
  },
  setUser(context, userName) {
    //set current user
    context.commit("setUser", userName);
  },
  resetProductIdsInCart(context) {
    //empty all  productId's from cart
    context.commit("setProductIdsInCart", []);
  },
  setCartValue(context, cartValue) {
    //set total cart value
    context.commit("setCartValue", cartValue);
  },
  enablePayment(context, flag) {
    //enable/disable payment option
    context.commit("enablePayment", flag);
  },
  resetTimeStamp(context) {
    context.commit("resetTimeStamp");
  },
  resetData(context) {
    context.commit("setProducts", []);
    context.commit("setProductIdsInCart", []);
    context.commit("setSearchedItems", []);
    context.commit("setCartItems", []);
    context.commit("resetTimeStamp");
  },
  setTimeStamp(context) {
    context.commit("setTimeStamp");
  }
};
