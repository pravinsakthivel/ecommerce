export default {
  updateCart(context, data) {
    let cartItems = [...context.getters.getcartItems(), data];
    context.commit("setCartItmes", cartItems);
  },
  setProducts(context, payload) {
    context.commit("setProducts", payload);
  },
  removeCartItem(context, productId) {
    let cartItems = context.getters.getcartItems();
    let filteredItems = cartItems.filter((item) => {
      return item.productId != productId;
    });
    context.commit("setCartItmes", filteredItems);
  },
};
