export default {
  getProducts(state) {
    return state.products;
  },
  getCartItems(state) {
    return state.cartItems;
  },
  getproductIdsIncart(state) {
    return state.productsIdsInCart;
  },
  shouldRefresh(state) {
    let lastUpdate = state.lastUpdated;
    if (!lastUpdate) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastUpdate) / 1000 > 60;
  },
  getSearchItems(state){
      return state.searchedItems;
  },
  getLoggedInUser(state){
    return state.loggedInUser;
  }
};
