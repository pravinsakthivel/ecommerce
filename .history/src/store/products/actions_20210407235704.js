export default {
  updateCart(context, data) {
    let cartItems = [...context.getters.getCartItems, data];
    context.commit("setCartItmes", cartItems);
  },
  setCartItems(context,data){
    context.commit("setCartItmes", data);
  },
  setProducts(context, payload) {
    context.commit("setProducts", payload);
  },
  removeCartItem(context, productId) {
    let cartItems = context.getters.getCartItems;
    let filteredItems = cartItems.filter((item) => {
      return item.productId != productId;
    });
    context.commit("setCartItmes", filteredItems);
  },
  async loadProducts(context) {
    let url =
      "https://products-data-b01f9-default-rtdb.firebaseio.com/products/-MXaxOFKGRgCKs_OkzrR.json";
    let response = await fetch(url);
    let responseData = await response.json();
    context.commit("setProducts",responseData);
  }
};
