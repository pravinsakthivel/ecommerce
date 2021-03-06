export default {
  setCartItems(state, payload) {
    state.cartItems = payload;
  },
  setProducts(state, payload) {
    state.products = payload;
  },
  setProductIdsInCart(state, payload) {
    state.productsIdsInCart = payload;
  },
  setTimeStamp(state) {
    state.lastUpdated = new Date().getTime();
  },
  setSearchedItems(state, payload) {
    state.searchedItems = payload;
  },
  setUser(state, userName) {
    state.loggedInUser = userName;
  },
  setCartValue(state,cartValue){
    state.totalCartValue = cartValue;
  },
  enablePayment(state,flag){
    state.enablePayment = flag;
  },
  resetTimeStamp(state){
    state.lastUpdated = null;
  }
};
