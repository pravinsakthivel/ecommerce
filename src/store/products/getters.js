export default {
    getProducts(state){
        return state.products;
    },
    getCartItems(state){
        return state.cartItems;
    },
    getCartItemsId(state,getters){
        let productsInCart =[];
        let products = getters.getCartItems;
        products.forEach((item) => {
          productsInCart.push(item.productId);
        });
        return productsInCart;
    },
    
}