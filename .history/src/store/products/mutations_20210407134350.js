export default {
    updateCart(state,payload){
        console.log(typeof state.cartItems);
        state.cartItems = [...state.cartItems,payload];
    },
    setProducts(state,payload){
        state.products =payload;
    }
}