export default {
    addToCart(context,payload){
        console.log("addToCart",payload);
        context.commit('addTocart',payload);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}