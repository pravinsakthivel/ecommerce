export default {
  updateCart(context, data) {
      console.log(context.getters)
    let cartItems = [...context.getters.getCartItems(), data];
    context.commit("setCartItmes", cartItems);
  },
  setProducts(context, payload) {
    context.commit("setProducts", payload);
  },
  removeCartItem(context, productId) {
    let cartItems = context.getters.getCartItems();
    let filteredItems = cartItems.filter((item) => {
      return item.productId != productId;
    });
    context.commit("setCartItmes", filteredItems);
  },
};
