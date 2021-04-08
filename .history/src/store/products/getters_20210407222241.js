export default {
    getProducts(state){
        return state.products;
    },
    getCartItems(state){
        return state.cartItems;
    },
    getCartItemsId(state){
        let productsInCart =[];
        let products = state.getters.getCartItems;
        products.forEach((item) => {
          productsInCart.push(item.productId);
        });
        return productsInCart;
    }
}