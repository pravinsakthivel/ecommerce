export default {
    addToCart(state,payload){
        state.cartItems.push(payload);
    },
    setProducts(state,payload){
        state.products =payload;
    }
}