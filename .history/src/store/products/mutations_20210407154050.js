export default {
    updateCart(state,payload){
        state.cartItems = [...state.cartItems,payload];
    },
    setProducts(state,payload){
        state.products =payload;
    }
}