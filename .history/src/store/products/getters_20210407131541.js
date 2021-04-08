export default {
    getProducts(state){
        console.log(state.products);
        return state.products;

    },
    getcartItems(state){
        return state.cartItems;
    }
}