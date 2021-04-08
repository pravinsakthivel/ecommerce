export default {
    updateCart(state,payload){
        console.log(typeof state.cartItems);
        state.cartItems.push(payload);
    },
    setProducts(state,payload){
        state.products =payload;
    }
}