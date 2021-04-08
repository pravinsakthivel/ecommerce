export default {
    updateCart(state,payload){
        state.cartItems.push(payload);
    },
    setProducts(state,payload){
        state.products =payload;
    }
}