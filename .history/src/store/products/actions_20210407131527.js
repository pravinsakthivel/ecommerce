export default {
    addToCart(context,payload){
        context.commit('addTocart',payload);
    },
    setProducts(context,payload){
        console.log("payload ",payload);
        context.commit('setProducts',payload);
    }
}