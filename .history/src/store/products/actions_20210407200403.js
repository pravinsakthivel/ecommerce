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
};
