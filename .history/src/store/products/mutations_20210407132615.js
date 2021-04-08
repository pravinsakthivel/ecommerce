export default {
    updateCart(state,payload){
        state.cartItems.push(payload);
        console.log("after cart update",state.cartItems);
    },
    setProducts(state,payload){
        state.products =payload;
    }
}