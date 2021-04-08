export default {
    addToCart(context,payload){
        context.commit('addTocart',payload);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}