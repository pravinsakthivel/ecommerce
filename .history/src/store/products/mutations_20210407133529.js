export default {
    updateCart(state,payload){
        console.log(payload);
        state.cartItems.push(payload);
    },
    setProducts(state,payload){
        state.products =payload;
    }
}