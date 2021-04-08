export default {
    addToCart(context,payload){
        context.commit('addTocart',payload);
    },
    setProducts(context,payload){
        console.log(payload);
        context.commit('setProducts',payload);
    }
}