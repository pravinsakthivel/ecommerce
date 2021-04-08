export default {
    updateCart(state,payload){
        let cartItems = state.cartItems; 
        cartItems.push(payload);
        state.cartItems = cartItems;
    },
    setProducts(state,payload){
        state.products =payload;
    }
}